import { getInput } from '@actions/core'
import { put } from '@vercel/blob'
import { readFile } from 'node:fs/promises'
import { Config } from 'shared'
import { $, tempfile } from 'zx'
import generateLatex from './generateLatex'

// get input
const id = getInput('id')

// get data
const res = await fetch(`https://shu.nu/api/resume/data/${id}`)
const json = await res.json()

// build latex
const latex = generateLatex(json)
await $`latexmk -pdf ${tempfile(id, latex)}`

// upload artifact
const buffer = await readFile(`${id}.pdf`)
await put(`${Config.BLOB_RESUME_FOLDER}/${id}`, buffer, {
  token: process.env.BLOB_READ_WRITE_TOKEN,
  access: 'public',
  contentType: 'application/pdf'
})
