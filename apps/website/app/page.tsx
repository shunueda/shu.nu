import { readFileSync } from 'fs'
import { Config, ResumeFormat } from 'shared'
import { parse } from 'yaml'

async function fetchResume(): Promise<ResumeFormat> {
  const resume = readFileSync(`../../${Config.RESUME_FILE}`).toString()
  return parse(resume) as ResumeFormat
}

export default async function Home() {
  const resume = await fetchResume()
  return <>{JSON.stringify(resume)}</>
}
