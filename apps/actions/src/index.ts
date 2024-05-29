import { getInput } from '@actions/core'
import { put } from '@vercel/blob'
import { readFile, writeFile } from 'node:fs/promises'
import { $, tempfile } from 'zx'
import generateLatex from './generateLatex'

const id = parseInt(getInput('id'))

const res = await fetch(`https://shu.nu/api/resume/data/${id}`, {
  method: 'GET'
})
const json = await res.json()

const filename = tempfile()
const latex = generateLatex(json)
await writeFile(filename, latex)

const out = await $`latexmk -pdf ${filename}`
console.log(out.message)

const buffer = await readFile(`${filename}.pdf`)

await put(id.toString(), buffer, {
  token: process.env.BLOB_READ_WRITE_TOKEN,
  access: 'public',
  contentType: 'application/pdf'
})
