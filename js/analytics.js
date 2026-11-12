/* Replace the placeholder after creating a GA4 web data stream. */
window.PORTFOLIO_GA4 = window.PORTFOLIO_GA4 || {
    measurementId: "G-EV3BE0BJHK",
    enabled: true,
    trackPreviewEnvironments: false
};

(() => {
    const config = window.PORTFOLIO_GA4;
    const measurementId = typeof config.measurementId === "string" ? config.measurementId.trim() : "";
    const validMeasurementId = /^G-[A-Z0-9]+$/i.test(measurementId) && measurementId !== "G-XXXXXXXXXX";
    const isProductionHost = window.location.hostname === "whitepawn07.github.io";
    const active = Boolean(config.enabled && validMeasurementId && (isProductionHost || config.trackPreviewEnvironments));
    const safeLocation = () => `${window.location.origin}${window.location.pathname}`;

    if (active) {
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function gtag() {
            window.dataLayer.push(arguments);
        };
        window.gtag("js", new Date());
        window.gtag("config", measurementId, {
            send_page_view: false,
            page_location: safeLocation()
        });

        const tag = document.createElement("script");
        tag.async = true;
        tag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
        tag.onerror = () => {};
        document.head.appendChild(tag);
    } else {
        window.gtag = window.gtag || function noop() {};
    }

    const send = (name, parameters = {}) => {
        if (!active) return;
        try {
            window.gtag("event", name, parameters);
        } catch (_) {
            // Analytics must never interfere with site interactions.
        }
    };

    const currentPage = () => document.querySelector(".page.active").dataset.pageContent || "about";
    const pageView = pageName => send("page_view", {
        page_title: document.title,
        page_location: safeLocation(),
        page_name: pageName
    });

    pageView(document.body.dataset.pageName || currentPage());

    const locationName = element => {
        const section = element.closest("[id]");
        if (section.id) return section.id;
        if (element.closest("nav")) return "navigation";
        if (element.closest("footer")) return "footer";
        return "profile";
    };

    const safeDestination = href => {
        try {
            const destination = new URL(href, window.location.href);
            return `${destination.origin}${destination.pathname}`;
        } catch (_) {
            return "";
        }
    };

    document.addEventListener("click", event => {
        const target = event.target instanceof Element ? event.target : event.target.parentElement;
        if (!target) return;

        const nav = target.closest(".nav-link, [data-go-page]");
        if (nav) send("navigation_click", {
            navigation_item: nav.dataset.page || nav.dataset.goPage || "unknown"
        });

        const link = target.closest("a[href]");
        if (!link) return;

        const href = link.getAttribute("href") || "";
        const linkLocation = locationName(link);
        const url = (() => {
            try {
                return new URL(href, window.location.href);
            } catch (_) {
                return null;
            }
        })();
        const isExternal = url && url.origin !== window.location.origin;
        const linkUrl = isExternal ? safeDestination(href) : undefined;
        const projectCard = link.closest(".project-card");

        if (link.hasAttribute("download")) {
            const fileName = (link.getAttribute("download") || url.pathname.split("/").pop() || "download").split(/[?#]/)[0];
            if (/\.pdf$/i.test(fileName) || link.classList.contains("resume-download-button")) {
                send("resume_download", {
                    file_name: fileName,
                    file_type: "pdf"
                });
            }
            return;
        }
        if (/^mailto:/i.test(href)) {
            send("email_click", {
                link_location: linkLocation
            });
            return;
        }
        if (/^tel:/i.test(href)) {
            send("contact_click", {
                contact_type: "phone",
                link_location: linkLocation
            });
            return;
        }
        if (projectCard && isExternal) {
            send("project_click", {
                project_name: projectCard.querySelector("h4").textContent.trim() || "unknown",
                project_category: projectCard.querySelector(".project-category").textContent.trim() || "unknown",
                destination_url: linkUrl
            });
            return;
        }
        if (!isExternal) return;
        if (url.hostname === "github.com" || url.hostname.endsWith(".github.com")) {
            send("github_click", {
                link_url: linkUrl,
                link_location: linkLocation
            });
        } else if (url.hostname === "linkedin.com" || url.hostname.endsWith(".linkedin.com")) {
            send("linkedin_click", {
                link_url: linkUrl,
                link_location: linkLocation
            });
        } else {
            send("external_link_click", {
                destination_url: linkUrl,
                link_location: linkLocation
            });
        }
    });

    window.portfolioAnalytics = {
        pageChanged(pageName) {
            pageView(pageName);
        }
    };
})();