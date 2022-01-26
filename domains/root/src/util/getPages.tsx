import { Page } from '~/src/types'

export async function getPages(): Promise<Page[]> {
  const res = await fetch('/api/getPageTitles')
  const titles = (await res.json()) as string[]
  return Promise.all(
    titles.map(async title => {
      return {
        title: title,
        body: (await import('components/pages/home')).default()
      }
    })
  )
}
