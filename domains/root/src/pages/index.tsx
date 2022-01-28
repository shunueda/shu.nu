import titles from 'assets/page_titles.json'
import Navbar from 'components/navbar'
import Slider from 'components/slider'
import dynamic from 'next/dynamic'
import classes from 'pages/index.module.scss'
import { useState } from 'react'
import useAsyncEffect from 'use-async-effect'
import Footer from '~/src/components/footer'
import { Page } from '~/src/types'

export default function Home() {
  const [hash, setHash] = useState('')
  const [pages, setPages] = useState<Page[]>([])
  const [subComponentHeight, setSubComponentHeight] = useState(0)
  useAsyncEffect(async () => {
    setPages(
      (await Promise.all(
        (titles as string[]).map(async title => {
          const Dynamic = dynamic(() => import(`components/pages/${title}.tsx`))
          return {
            title: title,
            body: <Dynamic />
          }
        })
      )) as Page[]
    )
    if (!window.location.hash) {
      window.location.hash = 'home'
    } else {
      setHash(window.location.hash.substring(1))
    }
    window.onhashchange = () => {
      setHash(window.location.hash.substring(1))
    }
    window.addEventListener('resize', handleResize)

    function handleResize() {
      setSubComponentHeight(
        [classes.navbar, classes.footer]
          .map(className => {
            return document.getElementsByClassName(className)[0].clientHeight
          })
          .reduce((prev, curr) => prev + curr, 0)
      )
    }

    const resizer = setInterval(handleResize)
    setTimeout(() => {
      clearTimeout(resizer)
    }, 100)

    return () => {
      clearTimeout(resizer)
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
