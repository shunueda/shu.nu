import { Page } from '~/src/types'

export async function getPages(): Promise<Page[]> {
  return [
    {
      title: 'home',
      body: <p>Hello, world!</p>
    },
    {
      title: 'experiences',
      body: <p>Experiences</p>
    },
    {
      title: 'projects',
      body: <p>Projects</p>
    }
  ]
}
