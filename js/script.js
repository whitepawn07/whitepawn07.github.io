const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const escapeHtml = (value = "") =>
    String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    } [char]));

const skillIcons = {
    php: {
        className: "devicon-php-plain colored",
        image: "https://cdn.simpleicons.org/php/777BB4"
    },
    laravel: {
        className: "devicon-laravel-original colored",
        image: "https://cdn.simpleicons.org/laravel/FF2D20"
    },
    javascript: {
        className: "devicon-javascript-plain colored",
        image: "https://cdn.simpleicons.org/javascript/F7DF1E"
    },
    typescript: {
        className: "devicon-typescript-plain colored",
        image: "https://cdn.simpleicons.org/typescript/3178C6"
    },
    python: {
        className: "devicon-python-plain colored",
        image: "https://cdn.simpleicons.org/python/3776AB"
    },
    react: {
        className: "devicon-react-original colored",
        image: "https://cdn.simpleicons.org/react/61DAFB"
    },
    nextjs: {
        className: "devicon-nextjs-plain colored",
        image: "https://cdn.simpleicons.org/nextdotjs/000000"
    },
    vue: {
        className: "devicon-vuejs-plain colored",
        image: "https://cdn.simpleicons.org/vuedotjs/4FC08D"
    },
    node: {
        className: "devicon-nodejs-plain colored",
        image: "https://cdn.simpleicons.org/nodedotjs/5FA04E"
    },
    django: {
        className: "devicon-django-plain colored",
        image: "https://cdn.simpleicons.org/django/092E20"
    },
    strapi: {
        className: "devicon-strapi-plain colored",
        image: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/32f3a89c-99c4-466f-8536-dd75f65fa320/Strapi-Monogram/w=1920,quality=90,fit=scale-down"
    },
    sanity: {
        className: "devicon-sanity-plain colored",
        image: "https://cdn.simpleicons.org/sanity/F03E2F"
    },
    mysql: {
        className: "devicon-mysql-original colored",
        image: "https://cdn.simpleicons.org/mysql/4479A1"
    },
    aws: {
        className: "devicon-amazonwebservices-plain-wordmark colored",
        image: "https://cdn.simpleicons.org/amazonaws/FF9900"
    },
    docker: {
        className: "devicon-docker-plain colored",
        image: "https://cdn.simpleicons.org/docker/2496ED"
    },
    git: {
        className: "devicon-git-plain colored",
        image: "https://cdn.simpleicons.org/git/F05032"
    },
    linux: {
        className: "devicon-linux-plain colored",
        image: "https://cdn.simpleicons.org/linux/FCC624"
    },
    tailwind: {
        className: "devicon-tailwindcss-original colored",
        image: "https://cdn.simpleicons.org/tailwindcss/06B6D4"
    }
};

const icons = {
    server: `
      <svg viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="8" x="2" y="2" rx="2"/>
          <rect width="20" height="8" x="2" y="14" rx="2"/>
          <line x1="6" x2="6.01" y1="6" y2="6"/>
          <line x1="6" x2="6.01" y1="18" y2="18"/>
      </svg>
  `,

    layers: `
      <svg viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round">
          <path d="m12.83 2.18 8 4a2 2 0 0 1 0 3.58l-8 4a2 2 0 0 1-1.66 0l-8-4a2 2 0 0 1 0-3.58l8-4a2 2 0 0 1 1.66 0Z"/>
          <path d="m6.08 11.5-3.75 1.88a2 2 0 0 0 0 3.58l8 4a2 2 0 0 0 1.66 0l8-4a2 2 0 0 0 0-3.58l-3.75-1.88"/>
      </svg>
  `,

    plug: `
      <svg viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22v-5"/>
          <path d="M9 8V2"/>
          <path d="M15 8V2"/>
          <path d="M18 8v4a6 6 0 0 1-12 0V8Z"/>
          <path d="M8 12h8"/>
      </svg>
  `,

    cloud: `
      <svg viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 0 1 0 9Z"/>
          <path d="M16 15h2"/>
          <path d="M19 12h2"/>
      </svg>
  `
};

function servicesIconHtml(service) {
    const icon = icons[service.icon]
    return `
    <div class="icon-box">
      ${icon}
    </div>
    `

}

function skillIconHtml(skill) {
    const icon = skillIcons[skill.icon];
    if (!icon) {
        return `<span class="skill-icon-text">${escapeHtml(skill.name.slice(0, 2).toUpperCase())}</span>`;
    }

    return `
    <span class="skill-icon" data-skill-icon>
      <i class="${escapeHtml(icon.className)}" aria-hidden="true"></i>
      <img src="${escapeHtml(icon.image)}" alt="" aria-hidden="true" loading="lazy" onerror="this.remove()">
    </span>`;
}

function applySkillIconFallbacks() {
    document.fonts.ready.then(() => {
        $$('[data-skill-icon]').forEach(wrapper => {
            const icon = wrapper.querySelector('i');
            const image = wrapper.querySelector('img');
            if (!icon || !image) return;

            const content = getComputedStyle(icon, '::before').content;
            const iconIsAvailable = content && content !== 'none' && content !== 'normal' && content !== '""';

            if (iconIsAvailable) {
                image.style.display = 'none';
            } else {
                icon.style.display = 'none';
                image.style.display = 'block';
            }
        });
    }).catch(() => {});
}

let siteData = null;
let currentFilter = "All";

async function loadData() {
    // GitHub Pages / local web server: use the editable JSON file.
    // file:// fallback: browsers commonly block fetch() for local JSON files,
    // so use the embedded copy included in index.html.
    try {
        const response = await fetch("data/resume.json", {
            cache: "no-store"
        });
        if (!response.ok) throw new Error(`Unable to load resume.json (${response.status})`);
        siteData = await response.json();
    } catch (error) {
        const fallback = document.getElementById("resume-data-fallback");

        if (!fallback) throw error;

        siteData = JSON.parse(fallback.textContent);
        console.info("Using embedded portfolio data because resume.json could not be fetched directly.");
    }

    render();
}

function render() {
    document.title = siteData.site.title;
    const p = siteData.profile;

    $("#profileImage").src = p.image;
    $("#profileName").textContent = p.name;
    $("#profileTitle").textContent = p.title;
    $("#availability").textContent = p.availability;
    $("#profileLocation").textContent = p.location;

    const email = $("#profileEmail");
    email.textContent = p.email;
    email.href = `mailto:${p.email}`;

    const phone = $("#profilePhone");
    phone.textContent = p.phone;
    phone.href = `tel:${p.phone.replace(/[^\d+]/g, "")}`;

    $("#profileLinkedin").href = p.linkedin;
    $("#linkedinLink").href = p.linkedin;
    $("#githubLink").href = p.github;
    $("#emailLink").href = `mailto:${p.email}`;
    $("#sidebarContact").href = `mailto:${p.email}`;

    $("#heroName").textContent = p.name;
    $("#heroTitle").textContent = p.title;
    $("#summary").textContent = siteData.summary;
    $("#stats").innerHTML = siteData.stats.map(stat => `
    <div class="stat">
      <strong>${escapeHtml(stat.value)}</strong>
      <span>${escapeHtml(stat.label)}</span>
    </div>
  `).join("");

    $("#services").innerHTML = siteData.services.map(service => `
    <article class="service-card">
      ${servicesIconHtml(service)}
      <h4>${escapeHtml(service.title)}</h4>
      <p>${escapeHtml(service.description)}</p>
    </article>
  `).join("");

    $("#skillPills").innerHTML = siteData.skills.map(skill => `
    <span class="skill-pill">
      ${skillIconHtml(skill)}
      ${escapeHtml(skill.name)}
    </span>
  `).join("");
    applySkillIconFallbacks();

    renderExperience("#experiencePreview", true);
    renderExperience("#experienceFull", false);
    renderEducation("#educationPreview");
    renderEducation("#educationFull");
    renderSkillsByCategory();
    renderProjects("#featuredProjects", siteData.projects.slice(0, 3));
    renderFilters();
    renderProjects("#projectGrid", filteredProjects());

    $("#contactEmail").textContent = p.email;
    $("#contactEmail").href = `mailto:${p.email}`;
    $("#contactPhone").textContent = p.phone;
    $("#contactPhone").href = `tel:${p.phone.replace(/[^\d+]/g, "")}`;
    $("#contactLocation").textContent = p.location;
    $("#contactLinkedin").href = p.linkedin;
    $("#contactGithub").href = p.github;
    $("#contactEmailButton").href = `mailto:${p.email}`;

    $("#currentYear").textContent = new Date().getFullYear();
}

function renderExperience(selector, compact) {
    const target = $(selector);
    if (!target) return;

    target.innerHTML = siteData.experience.map(job => `
    <article class="timeline-item">
      <div class="date">${escapeHtml(job.dates)}</div>
      <h4>${escapeHtml(job.role)}</h4>
      <div class="company">${escapeHtml(job.company)} · ${escapeHtml(job.location)}</div>
      <ul>
        ${job.bullets.map(bullet => `<li>${escapeHtml(bullet)}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function educationHtml(item) {
    return `
    <article class="education-card">
      <div class="degree">${escapeHtml(item.degree)}</div>
      <div class="school">${escapeHtml(item.school)}</div>
      <div class="meta">${escapeHtml(item.location)} · ${escapeHtml(item.year)}</div>
    </article>
  `;
}

function renderEducation(selector) {
    const target = $(selector);
    if (!target) return;
    target.innerHTML = siteData.education.map(educationHtml).join("");
}

function renderSkillsByCategory() {
    $("#skillsByCategory").innerHTML = siteData.skillsGroups.map(group => `
    <article class="skill-category">
      <h4>${escapeHtml(group.title)}</h4>
      <ul>${group.items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function projectHtml(project) {
    const hasUrl = Boolean(project.url && project.url.trim());
    const fullImage = project.fullImage && project.fullImage.trim() ?
        project.fullImage :
        project.image;

    return `
  <article class="project-card">
    <button class="project-image-trigger" type="button"
      data-project-image="${escapeHtml(fullImage)}"
      data-project-title="${escapeHtml(project.title)}"
      data-project-category="${escapeHtml(project.category)}"
      aria-label="View larger image of ${escapeHtml(project.title)}">
      <img class="project-image" src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} preview">
    </button>
    <div class="project-body">
      <div class="project-category">${escapeHtml(project.category)}</div>
      <h4>${escapeHtml(project.title)}</h4>
      <p>${escapeHtml(project.description)}</p>
      <div class="tags">
        ${project.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
      <div class="project-actions">
        ${hasUrl
    ? `<a class="project-link" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer">View Project →</a>`
    : ``}
      </div>
    </div>
  </article>
`;
}

function renderProjects(selector, projects) {
    const target = $(selector);
    if (!target) return;
    target.innerHTML = projects.map(projectHtml).join("");
}

function filteredProjects() {
    if (currentFilter === "All") return siteData.projects;
    return siteData.projects.filter(project => project.category === currentFilter);
}

function renderFilters() {
    const categories = ["All", ...new Set(siteData.projects.map(project => project.category))];
    $("#projectFilters").innerHTML = categories.map(category => `
    <button class="filter-button ${category === currentFilter ? "active" : ""}" data-filter="${escapeHtml(category)}">
      ${escapeHtml(category)}
    </button>
  `).join("");
}

function navigate(page) {
    $$(".nav-link").forEach(button => {
        button.classList.toggle("active", button.dataset.page === page);
    });

    $$(".page").forEach(article => {
        article.classList.toggle("active", article.dataset.pageContent === page);
    });

    if (window.innerWidth < 821) window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener("click", event => {
    const nav = event.target.closest(".nav-link");
    if (nav) navigate(nav.dataset.page);

    const go = event.target.closest("[data-go-page]");
    if (go) navigate(go.dataset.goPage);

    const filter = event.target.closest("[data-filter]");
    if (filter) {
        currentFilter = filter.dataset.filter;
        renderFilters();
        renderProjects("#projectGrid", filteredProjects());
    }
});

$("#themeToggle").addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    document.documentElement.dataset.theme = isDark ? "light" : "dark";
    $("#themeToggle").textContent = isDark ? "☾" : "☀";
    localStorage.setItem("portfolio-theme", isDark ? "light" : "dark");
});

$("#sidebarToggle").addEventListener("click", () => {
    const details = $("#sidebarDetails");
    const open = details.classList.toggle("open");
    $("#sidebarToggle").setAttribute("aria-expanded", String(open));
});

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
    document.documentElement.dataset.theme = "dark";
    $("#themeToggle").textContent = "☀";
}

loadData().catch(error => {
    document.body.innerHTML = `
    <main style="max-width:700px;margin:60px auto;padding:30px;font-family:system-ui">
      <h1>Portfolio content could not be loaded.</h1>
      <p>Please check that <code>data/resume.json</code> is valid JSON and that the portfolio files are kept in their original folder structure.</p>
      <p>You can also run the site through a local web server or GitHub Pages.</p>
    </main>
  `;
});


const lightbox = document.querySelector("#projectLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxTitle = document.querySelector("#lightboxTitle");
const lightboxCategory = document.querySelector("#lightboxCategory");
const lightboxClose = document.querySelector("#lightboxClose");

let lightboxTrigger = null;

function openProjectLightbox(image, title, category, trigger) {
    if (!lightbox || !lightboxImage || !image) return;

    lightboxImage.src = image;
    lightboxImage.alt = `${title} preview`;

    if (lightboxTitle) lightboxTitle.textContent = title;

    if (lightboxCategory) {
        lightboxCategory.textContent =
            `${category} · Click outside or press Escape to close`;
    }

    lightbox.classList.add("open");

    lightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("lightbox-open");

    // Remember the card image so focus can return to it on close.
    lightboxTrigger = trigger || null;

    if (lightboxClose) lightboxClose.focus();
}

function closeProjectLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove("open");

    lightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("lightbox-open");

    if (lightboxImage) {
        lightboxImage.removeAttribute("src");
        lightboxImage.alt = "";
    }

    if (lightboxTrigger && document.contains(lightboxTrigger)) lightboxTrigger.focus();

    lightboxTrigger = null;
}

document.addEventListener("click", event => {
    const trigger = event.target.closest("[data-project-image]");

    if (trigger) {
        openProjectLightbox(
            trigger.dataset.projectImage,
            trigger.dataset.projectTitle,
            trigger.dataset.projectCategory,
            trigger
        );
        return;
    }

    // Clicking the dark backdrop (anything outside the dialog) closes the lightbox.
    if (lightbox && lightbox.classList.contains("open") && !event.target.closest(".lightbox-dialog")) {
        closeProjectLightbox();
    }
});

if (lightboxClose) lightboxClose.addEventListener("click", closeProjectLightbox);

document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    if (lightbox && lightbox.classList.contains("open")) closeProjectLightbox();
});