import { readFileSync } from 'fs'
import { Config, type ResumeFormat } from 'shared'
import { parse } from 'yaml'

export default async function fetchResume(): Promise<ResumeFormat> {
  const resume = readFileSync(`../../${Config.RESUME_FILE}`).toString()
  return parse(resume) as ResumeFormat
}
