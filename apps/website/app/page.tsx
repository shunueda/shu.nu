async function fetchResume() {
  const res = await fetch(`${process.env.__NEXT_PRIVATE_ORIGIN}/api/resume`)
  return res.json()
}

export default async function Home() {
  const resume = await fetchResume()
  return <>{JSON.stringify(resume)}</>
}
