# John Paul Sargento — vCard-style Portfolio

Static GitHub Pages portfolio based structurally on the `codewithsadee/vcard-personal-portfolio` layout: fixed profile/sidebar, tab-style main navigation, About/Resume/Portfolio/Contact pages, responsive layout, and light/dark themes.

Reference:
https://github.com/codewithsadee/vcard-personal-portfolio

## Files

- `index.html` — semantic page structure and separate page sections
- `css/style.css` — all styling, responsive rules and themes
- `js/script.js` — navigation, theme toggle, filters and JSON rendering
- `data/resume.json` — editable portfolio/resume content
- `assets/images/profile-placeholder.svg` — replace with your profile photo
- `assets/images/project-*.svg` — replace with real project screenshots

## Updating the content

Most content can be changed in `data/resume.json`.

### Profile image

Replace:

`assets/images/profile-placeholder.svg`

with your real image and update `profile.image` in `data/resume.json`, for example:

`"image": "assets/images/profile.jpg"`

### Project URLs

Each project contains:

`"url": ""`

Replace the empty string with a live project, repository, case study or demo URL. The portfolio automatically shows a View Project button when a URL is present.

### Project images

Replace the six SVG placeholders with real screenshots. Keep the same filenames, or update each project's `image` field in `data/resume.json`.

## Local testing

The portfolio can be opened directly by double-clicking `index.html`. A fallback copy of the JSON is embedded in `index.html` because browsers block local `fetch()` requests under `file://`.

For development, a local server is still recommended because it always loads the latest `data/resume.json`:

From the project root:

```bash
python3 -m http.server 8000
```

Then open:

`http://localhost:8000`

When served this way, `data/resume.json` is loaded directly, so edits to that file appear without regenerating the embedded fallback.

## GitHub Pages

This is a static site and can be deployed directly from the repository root.

Recommended GitHub Pages setting:

- Settings → Pages
- Deploy from a branch
- Select your main branch
- Folder: `/ (root)`

No build step is required.

## Important

The project images included in this package are intentionally placeholders. Replace them with your actual project screenshots before publishing.

The portfolio keeps the employment dates exactly as supplied in the current resume, including the overlapping dates shown in the source resume.


## Downloadable Resume

The Resume page includes a **Download Resume PDF** button.

The PDF is stored at `assets/documents/John-Paul-Sargento-Resume.pdf`. Replace that PDF with a newer version later while keeping the same filename.

## Technical skill icons

Technical skills use colored Devicon logos to match the reference style. The Devicon stylesheet is loaded from jsDelivr in `index.html`.
