import { setOutput } from '@actions/core'

const res = await fetch('https://api.github.com/users/xiaotian/repos')
const data = await res.json()

setOutput('data', data)
