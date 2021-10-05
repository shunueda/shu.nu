import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://kotlia.me'
  }, [])
  return <></>
}
