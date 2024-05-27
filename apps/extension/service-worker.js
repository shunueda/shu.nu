import { LinkedinToResumeJson } from './src/main.js'
const PROFILE_URL = 'https://www.linkedin.com/in/shunueda/'

chrome.action.onClicked.addListener(async tab => {
  if (tab.url !== PROFILE_URL) {
    return
  }
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const resume = new LinkedinToResumeJson(true, true, true)

      console.log(resume)
    }
  })
})
