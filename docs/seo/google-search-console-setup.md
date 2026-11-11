# Google Search Console setup

These steps require access to the Google account that should manage the property and to the GitHub Pages repository. No ownership verification, sitemap submission, or indexing request was completed as part of this repository change.

## Add and verify the property

1. Open [Google Search Console](https://search.google.com/search-console/) and choose **Add property**.
2. Select **URL prefix** and enter `https://whitepawn07.github.io/` exactly.
3. Choose the **HTML file** verification method. Download the verification file Google provides and add it unchanged to the repository root (alongside `index.html`). Commit and push it so it is served at the exact URL shown by Google.
4. Wait until GitHub Pages publishes the commit. In Search Console, click **Verify**. Keep the HTML verification file in the repository so ownership remains verifiable.

## Submit the sitemap

1. Open **Sitemaps** for the verified property.
2. Enter `sitemap.xml` (or the full URL `https://whitepawn07.github.io/sitemap.xml`) and submit it.
3. Revisit the report to check whether Google fetched and parsed it. Submission is a discovery hint, not a guarantee of indexing.

## Inspect pages and request indexing

1. Use the top **URL Inspection** field with `https://whitepawn07.github.io/`.
2. Review Google's indexed status and the last crawl details. After deployment, use **Test live URL** to check current accessibility and rendered content.
3. Repeat for `https://whitepawn07.github.io/resume.html`.
4. If a page is eligible and current, choose **Request indexing**. Requests are subject to Google's crawl and indexing systems and may take time.

## Monitor

- Check **Indexing → Pages** for indexed, excluded, and error reasons.
- Check **Sitemaps** for fetch/processing status and discovered URLs.
- Check **Performance → Search results** for queries, impressions, clicks, click-through rate, and average position. Use a date range long enough for meaningful data.
- Recheck after material content or deployment changes. Keep dates and status evidence in the indexing report; do not infer indexing solely from a `site:` query.

## Alternative verification

If HTML-file verification is unavailable, use another method Search Console offers for the URL-prefix property and follow the exact instructions displayed there. A DNS TXT record requires control of DNS for a domain; this GitHub Pages hostname does not imply that DNS control is available.
