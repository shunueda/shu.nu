const PROFILE_URL = 'https://www.linkedin.com/in/shunueda/'

chrome.action.onClicked.addListener(async tab => {
  if (tab.url !== PROFILE_URL) {
    return
  }
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: async () => {
      const src = chrome.runtime.getURL('lib/LinkedInToResume.mjs')
      await import(src)
      const resume = new LinkedinToResumeJson()
      const body = await resume.parseAndGetRawJson()
      await fetch('https://shu.nu/api/resume/build', {
        method: 'POST',
        body: JSON.stringify(body),
        mode: 'no-cors'
      })
      window.open('https://example.com', '_blank')
    }
  })
})
