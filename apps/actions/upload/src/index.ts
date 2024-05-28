import { getInput } from '@actions/core'
import { put } from '@vercel/blob'
import { readFileSync } from 'node:fs'

const id = getInput('id')
const latexPath = getInput('latex_path')
const pdfPath = latexPath.replace('.tex', '.pdf')
const buffer = readFileSync(pdfPath)

await put(id, buffer, {
  token: process.env.BLOB_READ_WRITE_TOKEN,
  access: 'public',
  contentType: 'application/pdf'
})
