# Google indexing investigation

**Verification date:** 2026-11-11
**Production URL:** <https://whitepawn07.github.io/>
**Status:** Search Console confirms the homepage and resume are not indexed yet. Both passed live tests and indexing requests were accepted.

## Search queries attempted

- `site:whitepawn07.github.io`
- `site:whitepawn07.github.io "John Paul Sargento"`
- `"John Paul Sargento" "Full Stack Developer"`
- `"John Paul Sargento" PHP Laravel`
- `"John Paul Sargento" portfolio`
- `"whitepawn07.github.io"`

The available web search tool returned no portfolio-domain results and did return a matching LinkedIn profile in general-name searches. Search Console provides the verified indexing evidence below; the web search observations alone do not establish index status.

## Page status

| URL | Search Console result | Status |
| --- | --- | --- |
| `https://whitepawn07.github.io/` | “URL is not on Google”; “URL is unknown to Google.” Live test: available to Google, can be indexed, one valid ProfilePage item detected. Request accepted into priority crawl queue. | Not indexed at 9:45 PM Manila time on 2026-11-11; recrawl pending |
| `https://whitepawn07.github.io/resume.html` | “URL is not on Google”; “URL is unknown to Google.” Live test: available to Google, can be indexed, one valid ProfilePage item detected. Request accepted into priority crawl queue. | Not indexed at 9:46 PM Manila time on 2026-11-11; recrawl pending |
| Other pages | Homepage sections are tabs in one document; no other public HTML page was found in the repository. | Not applicable |

## Crawl and index checks

- Search Console ownership was verified with `google02d83767b3932901.html`. Keep this file at the repository root to preserve verification.
- GitHub Pages deployment for commit `8096183` completed successfully. The verification file was publicly served at its expected URL.
- The live sitemap opens as XML and contains the homepage and resume URLs. Live `robots.txt` allows all crawlers and names the production sitemap.
- Search Console accepted `/sitemap.xml`, but its report says **“Sitemap could not be read”**, Last read `11/11/26`, and 0 discovered pages. The browser can open the XML and shows both expected URLs. Recheck after Google retries processing; the discrepancy remains unresolved.
- Search Console Overview said Performance and Indexing reports were processing data and to check again in a day or so. Search impressions and average position for the name query are not available yet.
- The GitHub repository About panel currently says no description, website, or topics are provided. Public profile/repository metadata was left unchanged under the scope constraint. Add the portfolio link there manually if desired. LinkedIn's website link could not be confirmed from the available public profile view.

## Conclusion and next action

Both pages are currently not indexed because Google did not yet know their URLs. Both are eligible for indexing, and both are in the priority crawl queue. The sitemap submission is present but currently reports a read failure; recheck its status after processing. Review the Page Indexing and Performance reports after they finish processing. Indexing requests do not guarantee indexing or a page-one ranking.
