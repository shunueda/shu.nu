import { getInput } from '@actions/core'
import { put } from '@vercel/blob'
import { readFile, writeFile } from 'node:fs/promises'
import { $, tempfile } from 'zx'
import buildLatex from './buildLatex'

const id = parseInt(getInput('id'))

const res = await fetch(`https://shu.nu/api/resume/data/${id}`, {
  method: 'GET'
})
const json = await res.json()

const latexFile = tempfile()
const latex = buildLatex(json)
await writeFile(latexFile, latex)

const pdfFile = tempfile()
$`latexmk -pdf -jobname=${pdfFile} ${latexFile}`

const buffer = await readFile(pdfFile)

await put(id.toString(), buffer, {
  token: process.env.BLOB_READ_WRITE_TOKEN,
  access: 'public',
  contentType: 'application/pdf'
})
