import * as core from '@actions/core'

async function run() {
  try {
    const myInput = core.getInput('my-input')
    core.info(`My input is: ${myInput}`)
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

run()
