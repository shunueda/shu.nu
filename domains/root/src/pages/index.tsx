import Navbar from 'components/navbar'
import classes from 'pages/index.module.scss'
import { useEffect, useState } from 'react'

export default function Home() {
  const sections = ['home', 'skills', 'experiences', 'projects', 'contacts']
  const [hash, setHash] = useState('')
  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = sections[0]
    }
    window.onhashchange = () => {
      setHash(window.location.hash.substring(1))
    }
  }, [sections])
  return (
    <div className={`container ${classes.root}`}>
      <div className={classes.navbar}>
        <Navbar sections={sections} hash={hash} />
      </div>
      <div
        className={classes.body}
        style={{
          marginLeft: `calc(calc(-1 * calc(100vw - 100%) / 2) - ${sections.indexOf(
            hash
          )}00vw)`
        }}
      >
        {/*<section>*/}
        {/*  <div style={{ background: 'red' }} className='container'>*/}
        {/*    HOME*/}
        {/*  </div>*/}
        {/*</section>*/}
      </div>
    </div>
  )
}
