import { Config, ResumeFormat } from 'shared'
import { parse } from 'yaml'

async function fetchResume(): Promise<ResumeFormat> {
  const res = await fetch(
    `https://raw.githubusercontent.com/shunueda/shu-nu/main/${Config.RESUME_FILE}`
  )
  return parse(await res.text())
}

export default async function Home() {
  const resume = await fetchResume()
  return <>{JSON.stringify(resume)}</>
}
