import getResumes from '@/lib/blobs/getResumes'

export default async function Resume() {
  const resumes = await getResumes()
  resumes.forEach(resume => {
    console.log(resume.uploadedAt)
  })
  return <iframe src='https://google.com' />
}
