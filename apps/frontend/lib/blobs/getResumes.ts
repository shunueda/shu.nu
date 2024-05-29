import { list } from '@vercel/blob'
import { Config } from 'shared'

export default async function getResumes() {
  const { blobs } = await list({
    mode: 'folded',
    prefix: `${Config.BLOB_RESUME_FOLDER}/`
  })
  return blobs.toSorted((a, b) => {
    return a.uploadedAt > b.uploadedAt ? -1 : 1
  })
}
