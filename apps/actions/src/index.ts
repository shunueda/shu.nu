import { getInput } from '@actions/core'
import { put } from '@vercel/blob'
import { readFile, writeFile } from 'node:fs/promises'
import { $ } from 'zx'
import generateLatex from './generateLatex'

const id = parseInt(getInput('id'))

const res = await fetch(`https://shu.nu/api/resume/data/${id}`, {
  method: 'GET'
})
const json = await res.json()

const FILENAME = 'resume'

const latex = generateLatex(json)
await writeFile(`${FILENAME}.tex`, latex)

try {
  await $`latexmk -pdf ${FILENAME}.tex`
} catch (error) {
  console.error('Error running latexmk:', error)
  process.exit(1)
}

let buffer
try {
  buffer = await readFile(`${FILENAME}.pdf`)
} catch (error) {
  console.error('Error reading PDF file:', error)
  process.exit(1)
}

try {
  await put(id.toString(), buffer, {
    token: process.env.BLOB_READ_WRITE_TOKEN,
    access: 'public',
    contentType: 'application/pdf'
  })
} catch (error) {
  console.error('Error uploading PDF:', error)
  process.exit(1)
}
