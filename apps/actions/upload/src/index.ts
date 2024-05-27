import { getInput, setOutput } from '@actions/core'
import { writeFileSync } from 'fs'

const id = parseInt(getInput('id'))

writeFileSync('a.txt', 'Hello, world!')

setOutput('data', id)
