import Navbar from 'components/navbar'
import Slider from 'components/slider'
import classes from 'pages/index.module.scss'
import { lazy, Suspense, useState } from 'react'
import useAsyncEffect from 'use-async-effect'
import Footer from '~/src/components/footer'
import { Page } from '~/src/types'

export default function Home() {
  const [hash, setHash] = useState('')
  const [pages, setPages] = useState<Page[]>([])
  const [subComponentHeight, setSubComponentHeight] = useState(0)
  useAsyncEffect(async () => {
    const titles = ['home', 'experiences', 'contact']
    setPages(
      (await Promise.all(
        titles.map(async title => {
          const LazyBody = lazy(() => import(`components/pages/${title}.tsx`))
          return {
            title: title,
            body: (
              <Suspense fallback={<></>}>
                <LazyBody />
              </Suspense>
            )
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
          .map(
            className =>
              document.getElementsByClassName(className)[0].clientHeight
          )
          .reduce((prev, curr) => prev + curr, 0)
      )
    }

    const resizer = setInterval(() => {
      handleResize()
    })
    setTimeout(() => {
      clearTimeout(resizer)
    }, 100)

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
