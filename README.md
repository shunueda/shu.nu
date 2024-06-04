# shu-nu

> everything about me

![system design](assets/diagram.svg)]

<details>
<summary>diagram source</summary>

```mermaid
sequenceDiagram
    participant chrome_extension as Chrome Extension
box transparent
participant serverless_functions as #9650;Vercel <br/> #9; <br/>Serverless Function
participant postgres as #9650;Vercel <br/> #9; <br/>Postgres
participant blob as #9650;Vercel <br/> #9; <br/>Blob
end
participant github_actions as GitHub Actions

NOTE OVER chrome_extension: Chrome Extension scrapes <br/> profile data from LinkedIn
chrome_extension ->> serverless_functions: POST /build
serverless_functions ->> postgres: Insert
postgres ->> serverless_functions: Issue ID
serverless_functions ->> github_actions: Trigger Action with issued ID
github_actions ->> postgres: Get data from ID
NOTE OVER github_actions: Action generates LaTeX from the data <br/> & compiles to a PDF
postgres ->> blob: Upload artifact (PDF)
NOTE OVER blob: Stored PDF files will be accessed <br/> from my website, etc.
```
</details>
