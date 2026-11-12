# Google Analytics 4

This static GitHub Pages site uses Google's official `gtag.js` tag through `js/analytics.js`. No backend, database, or additional package is required. The Measurement ID is intentionally a placeholder, so no analytics requests are sent until it is replaced.

## Setup

1. In [Google Analytics](https://analytics.google.com/), create an Analytics account if needed, then create a GA4 property for the portfolio.
2. Add a **Web** data stream for `https://whitepawn07.github.io` and copy its Measurement ID, which begins with `G-`.
3. In `js/analytics.js`, replace `G-XXXXXXXXXX` in `window.PORTFOLIO_GA4.measurementId` with that ID. The setting is in one place and is shared by `index.html` and `resume.html`.
4. Publish the change to the GitHub Pages branch. Tracking is enabled on `whitepawn07.github.io` only by default. To enable tracking on a preview host, set `trackPreviewEnvironments` to `true` temporarily; switch it back to `false` before publishing.
5. In the property's **Admin → Data streams → Web stream → Enhanced measurement** settings, enable Enhanced Measurement and keep **Scrolls** enabled. Turn off the automatic **Outbound clicks** and **File downloads** toggles because the portfolio sends its own categorized outbound events and `resume_download`. Page views are sent by the site, including virtual views for tab changes.

## Events

The site sends one categorized custom event for each click, in addition to GA4's standard automatic events that remain enabled:

| Event | Parameters |
| --- | --- |
| `page_view` | `page_title`, `page_location` (origin and path, with query and fragment removed), `page_name` |
| `navigation_click` | `navigation_item` |
| `project_click` | `project_name`, `project_category`, `destination_url` (origin and path only) |
| `github_click` | `link_url` (origin and path only), `link_location` |
| `linkedin_click` | `link_url` (origin and path only), `link_location` |
| `resume_download` | `file_name`, `file_type` |
| `email_click` | `link_location` |
| `contact_click` | `contact_type`, `link_location` (currently used for phone links) |
| `external_link_click` | `destination_url` (origin and path only), `link_location` |

GitHub, LinkedIn, project, email, and phone clicks use their specific event instead of also sending `external_link_click` or another overlapping custom event. Project image/lightbox and static skill interactions are not tracked. GA4 Enhanced Measurement supplies scroll-depth events. There is no site search, so no search event is configured.

## Verify collection

- After publishing a real Measurement ID, visit the deployed site and check **Reports → Realtime**. Confirm an active user and page view, then exercise a project link, profile/contact links, and the resume download.
- For event-level debugging, enable Google Analytics DebugView with the Google Analytics Debugger browser extension or an equivalent debug setup, then check **Admin → Data display → DebugView**. DebugView may not show events when consent, browser privacy settings, or blockers prevent collection.
- Browser-level checks can confirm the tag is requested and events are queued, but they do not prove Google received or processed events. Realtime/DebugView are the collection checks; allow for reporting delay.

## Disable analytics

Set `enabled` to `false` in `window.PORTFOLIO_GA4` in `js/analytics.js`. The tracking script will not be loaded. The placeholder Measurement ID and the default production-host restriction also keep analytics inactive until configured.

## Privacy and consent

Event parameters do not include email addresses, phone numbers, or query strings. Project titles and categories are sent as descriptive event context. GA4 is configured to avoid an automatic page view, and manually sent page and destination URLs omit query strings and fragments.

This implementation has no consent prompt and, once configured, collects analytics by default on the published hostname. Provide an appropriate privacy notice and determine whether consent or additional controls are required for the jurisdictions and audience you serve. Analytics requests may be blocked by browser settings or extensions; the portfolio remains usable in that case.
