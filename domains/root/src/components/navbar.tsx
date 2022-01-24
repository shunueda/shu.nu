import { useEffect, useState } from 'react'
import classes from './navbar.module.scss'

export default function Navbar() {
  const [hash, setHash] = useState('')
  useEffect(() => {
    window.onhashchange = () => {
      setHash(window.location.hash.substring(1))
    }
  }, [])
  return (
    <>
      <div className={`${classes.root} row`}>
        {['home', 'skills', 'experiences', 'projects', 'conctacts'].map(
          (item, index) => {
            return (
              <div
                key={item}
                className={`${classes.box} col-md content content__item`}
              >
                <a
                  className={`${classes.text} link link--kale`}
                  href={`/#${item}`}
                  style={{
                    color: hash === item ? '#000000' : '#d3d3d3'
                  }}
                >
                  {item}
                </a>
              </div>
            )
          }
        )}
      </div>
    </>
  )
}
