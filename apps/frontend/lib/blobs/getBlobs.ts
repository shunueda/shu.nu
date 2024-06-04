import { list } from '@vercel/blob'

export default async function getBlobs(folder: string) {
  const { blobs } = await list({
    mode: 'folded',
    prefix: `${folder}/`
  })
  return blobs.sort((a, b) => (a.uploadedAt > b.uploadedAt ? -1 : 1))
}
