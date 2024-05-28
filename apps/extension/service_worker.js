chrome.action.onClicked.addListener(async tab => {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: async () => {
      const src = chrome.runtime.getURL('dist/index.js')
      const func = (await import(src)).default
      await func()
    }
  })
})
