import Navbar from 'components/navbar'
import Slider from 'components/slider'
import classes from 'pages/index.module.scss'
import { useEffect, useState } from 'react'
import Footer from '~/src/components/footer'
import { getPages } from '~/src/util/getPages'

export default function Home() {
  const [hash, setHash] = useState('')
  const [pages, setPages] = useState([])
  const [subComponentHeight, setSubComponentHeight] = useState(0)
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
    window.addEventListener('resize', handleResize)
    handleResize()

    function handleResize() {
      setSubComponentHeight(
        [classes.navbar, classes.footer]
          .map(
            className =>
              document.getElementsByClassName(className)[0].clientHeight
          )
          .reduce((prev, curr) => prev + curr, 0)
      )
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className={`container ${classes.root}`}>
      <div className={classes.navbar}>
        <Navbar pages={pages} hash={hash} />
      </div>
      <Slider
        pages={pages}
        hash={hash}
        style={{
          minHeight: `calc(100vh - ${subComponentHeight}px)`
        }}
      />
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  )
}
