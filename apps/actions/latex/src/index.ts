import { getInput, setOutput } from '@actions/core'
import { writeFileSync } from 'fs'
import generateLatex from './buildLatex'

const id = parseInt(getInput('id'))

const res = await fetch(`https://shu.nu/api/resume/data/${id}`, {
  method: 'GET'
})
const json = await res.json()
const latex = generateLatex(json)

const PATH = 'resume.tex'
writeFileSync(PATH, latex)
setOutput('path', PATH)
