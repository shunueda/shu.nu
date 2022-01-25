import Navbar from 'components/navbar'
import Slider from 'components/slider'
import classes from 'pages/index.module.scss'
import { useEffect, useState } from 'react'
import { getPages } from '~/src/util/getPages'

export default function Home() {
  const [hash, setHash] = useState('')
  const [pages, setPages] = useState([])
  useEffect(() => {
    getPages().then(setPages)
    if (!window.location.hash) {
      window.location.hash = 'home'
    } else {
      setHash(window.location.hash.substring(1))
    }
    window.onhashchange = () => {
      setHash(window.location.hash.substring(1))
    }
  }, [])
  return (
    <div className={`container ${classes.root}`}>
      <div className={classes.navbar}>
        <Navbar pages={pages} hash={hash} />
      </div>
      <Slider pages={pages} hash={hash} />
    </div>
  )
}
