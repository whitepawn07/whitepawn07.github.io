# Google Search Console setup

Search Console ownership is verified for `https://whitepawn07.github.io/` using `google02d83767b3932901.html`. Keep the file at the repository root. The sitemap submission was accepted, but currently reports “Sitemap could not be read.” URL Inspection accepted indexing requests for the homepage and resume.

## Add and verify the property

1. Open [Google Search Console](https://search.google.com/search-console/) and choose **Add property**.
2. Select **URL prefix** and enter `https://whitepawn07.github.io/` exactly.
3. Choose the **HTML file** verification method. The issued file `google02d83767b3932901.html` is in the repository root and is served at `https://whitepawn07.github.io/google02d83767b3932901.html`.
4. Ownership is verified. Keep the file in the repository so verification remains active.

## Submit the sitemap

1. Open **Sitemaps** for the verified property.
2. Enter `sitemap.xml` (or the full URL `https://whitepawn07.github.io/sitemap.xml`) and submit it.
3. Revisit the report to check whether Google fetched and parsed it. The current entry says “Sitemap could not be read” and shows zero discovered pages, although the live XML renders with the two expected URLs. Recheck after processing time and use the report details if the error persists. Submission is a discovery hint, not a guarantee of indexing.

## Inspect pages and request indexing

1. Use the top **URL Inspection** field with `https://whitepawn07.github.io/`.
2. Review Google's indexed status and the last crawl details. After deployment, use **Test live URL** to check current accessibility and rendered content.
3. Repeat for `https://whitepawn07.github.io/resume.html`.
4. Both homepage and resume live tests passed, and requests were accepted into Google's priority crawl queue on 2026-11-11. Requests are subject to Google's crawl and indexing systems and may take time.

## Monitor

- Check **Indexing → Pages** for indexed, excluded, and error reasons.
- Check **Sitemaps** for fetch/processing status and discovered URLs.
- Check **Performance → Search results** for queries, impressions, clicks, click-through rate, and average position. Use a date range long enough for meaningful data.
- Recheck after material content or deployment changes. Keep dates and status evidence in the indexing report; do not infer indexing solely from a `site:` query.

## Alternative verification

If HTML-file verification is unavailable, use another method Search Console offers for the URL-prefix property and follow the exact instructions displayed there. A DNS TXT record requires control of DNS for a domain; this GitHub Pages hostname does not imply that DNS control is available.
