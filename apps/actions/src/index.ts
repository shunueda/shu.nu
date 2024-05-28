import { getInput } from '@actions/core'
import { put } from '@vercel/blob'
import { readFile, writeFile } from 'node:fs/promises'
import { $, tempdir } from 'zx'
import generateLatex from './generateLatex'

const id = parseInt(getInput('id'))

const res = await fetch(`https://shu.nu/api/resume/data/${id}`, {
  method: 'GET'
})
const json = await res.json()

const FILENAME = 'resume'

const latex = generateLatex(json)
const dir = tempdir()
await writeFile(`${dir}/${FILENAME}.tex`, latex)

$`latexmk -pdf ${dir}/${FILENAME}.tex`

const buffer = await readFile(`${dir}/${FILENAME}.pdf`)

await put(id.toString(), buffer, {
  token: process.env.BLOB_READ_WRITE_TOKEN,
  access: 'public',
  contentType: 'application/pdf'
})
