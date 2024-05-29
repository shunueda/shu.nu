import { list } from '@vercel/blob'

export default async function getResume() {
  const { folders, blobs } = await list({ mode: 'folded' })
  console.log(folders)
}
