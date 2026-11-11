# Google indexing investigation

**Verification date:** 2026-11-11  
**Production URL:** <https://whitepawn07.github.io/>  
**Status:** Unable to verify Google indexing.

## Search queries attempted

- `site:whitepawn07.github.io`
- `site:whitepawn07.github.io "John Paul Sargento"`
- `"John Paul Sargento" "Full Stack Developer"`
- `"John Paul Sargento" PHP Laravel`
- `"John Paul Sargento" portfolio`
- `"whitepawn07.github.io"`

The available web search tool returned no result from `whitepawn07.github.io` for these queries. It did return a matching LinkedIn profile in general-name searches. The tool does not provide Google Search Console index coverage evidence; these observations do not prove the site is absent from Google's index.

## Page status

| URL | Search observation | Google index status |
| --- | --- | --- |
| `https://whitepawn07.github.io/` | No result returned in the attempted search queries | Unable to verify |
| `https://whitepawn07.github.io/resume.html` | No result returned for the resume-specific/site-restricted check | Unable to verify |
| Other pages | Homepage tabs do not have separate URLs; no other public HTML page was found in the repository | Not applicable / unable to verify |

## Crawl and index checks

- The checked-out source had no `noindex` directive, canonical URL, `robots.txt`, or sitemap before implementation.
- Network/DNS access from this environment could not resolve `whitepawn07.github.io`, so live HTTP responses for the site, `robots.txt`, and `sitemap.xml` could not be verified.
- The repository remote is `whitepawn07/whitepawn07.github.io`, and root deployment is documented. This supports configuration compatibility but does not prove that Pages is enabled or deployed.
- Search Console was not connected or available, so there is no evidence of “discovered,” “crawled,” or “indexed” status.

## Conclusion and next action

The portfolio's Google index state is **unverified**. Do not interpret missing results from this search tool as a confirmed deindexing result. After deploying the metadata, sitemap, and robots changes, add the URL-prefix property in Search Console, submit `https://whitepawn07.github.io/sitemap.xml`, and inspect both public URLs. Follow the setup guide in this directory.
