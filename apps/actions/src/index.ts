import { getInput, setOutput } from '@actions/core'

const id = parseInt(getInput('id'))

setOutput('data', id)
