# SEO audit

**Audit date:** 2026-11-11  
**Production URL:** <https://whitepawn07.github.io/>  
**Scope:** Repository contents and attempted production verification before SEO changes.

## Findings

| Severity | Finding | Evidence / impact | Recommendation |
| --- | --- | --- | --- |
| High | No sitemap or robots.txt in the repository | Neither file existed at audit time; direct production checks could not complete | Publish a sitemap with the two public HTML URLs and an open robots policy pointing to it |
| High | No canonical or social metadata | Both HTML pages lacked canonical, Open Graph, and Twitter metadata | Add unique absolute production URLs and page-specific social descriptions |
| High | Search result status cannot be confirmed | Search queries did not return the portfolio in the available search tool; that tool is not Google Search Console, and direct production DNS/network access failed | Verify with URL Inspection and the Page Indexing report in Search Console |
| Medium | Homepage title and description were generic and title was overwritten by JavaScript | Source title said “Full Stack Software Developer”; `script.js` replaces it after data fetch | Set descriptive source metadata and keep the runtime title aligned |
| Medium | Resume page had title only | `resume.html` had no description, canonical, robots, social metadata, or structured data | Add unique metadata and a ProfilePage representation |
| Medium | Profile image alt text called it a placeholder | `index.html` used “Profile image placeholder” | Use an owner-identifying description |
| Medium | Projects are rendered client-side and generic alt text was generated | `js/script.js` created cards from JSON after page load | Add project-specific descriptive alt text and lazy loading |
| Medium | Much of the home page content is injected from JSON by JavaScript | About summary, experience, skills, education, and projects are initially empty containers | Keep checking rendered output in Search Console URL Inspection; consider prerendering only if evidence shows rendering is a problem |
| Low | No favicon reference or asset | No favicon was present | Add a lightweight SVG favicon |
| Low | No GitHub Actions workflow; root static deployment is documented | Repository root has `index.html`; remote is the matching `whitepawn07.github.io` repository | Continue GitHub Pages branch/root deployment; no build architecture is needed |
| Low | No custom `404.html` was present | A repository-level custom Pages not-found page was absent | Consider adding a small helpful 404 page if useful; it is not required for the two indexable pages |
| Low | Internal and external links are mostly anchors or runtime-populated links | The standalone resume links to `index.html`; social/contact links on the app are populated from JSON | Keep destinations accurate and validate after deployment |

## Structure and deployment observations

- Public HTML documents: `/` (`index.html`) and `/resume.html`.
- About, Resume, Portfolio, and Contact on the homepage are tabs in one document, not separate crawlable URLs.
- Static assets are root-relative paths suitable for the user site repository `whitepawn07.github.io`.
- `_config.yml` uses Jekyll configuration and does not define a theme or custom build. GitHub Pages root deployment is documented in `README.md`.
- No `.github/workflows` files were present. GitHub Actions deployment therefore was not configured in the checked-out tree.
- No preexisting `noindex`, canonical, or structured data directives were found.
- No CSS or visual styling changes are recommended for SEO.

## Production and indexing evidence

The web search tool was asked the six requested query variants. It returned no portfolio-domain result; it did return a matching LinkedIn profile for John Paul Sargento. This is search-tool observation only and does **not** establish Google's index state. Direct requests to the homepage, resume, robots, and sitemap could not resolve the production host in this environment, so HTTP status, published response headers, and live content were not confirmed. Search Console access was not available.

## Implementation plan

1. Add unique, descriptive metadata, canonical URLs, social cards, favicon references, and valid JSON-LD to each HTML page.
2. Add a root sitemap containing only the homepage and standalone resume, plus an allow-all robots file referencing that sitemap.
3. Improve profile and project image alternatives without changing layout or CSS.
4. Document implementation, search observations, Search Console setup, and local validation separately.
5. After changes, validate source metadata, JSON-LD syntax, sitemap XML, URL uniqueness, and local asset references. Live HTTP and Google indexing checks remain pending external access.
