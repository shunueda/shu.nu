import { CSSProperties, useEffect, useState } from 'react'
import { Page } from '~/src/types'
import classes from './slider.module.scss'

interface Props {
  pages: Page[]
  hash: string
  style?: CSSProperties
}

export default function Slider({ pages, hash, style }: Props) {
  const [transition, setTransition] = useState(true)
  useEffect(() => {
    let debounce: any
    window.onresize = () => {
      if (transition) setTransition(false)
      clearTimeout(debounce)
      debounce = setTimeout(() => {
        setTransition(true)
      }, 100)
    }
  }, [])
  return (
    <div
      className={classes.body}
      style={{
        ...{
          transition: transition ? 'margin-left 0.5s' : '',
          marginLeft: `calc(calc(-1 * calc(100vw - 100%) / 2) - ${pages
            .map(({ title }) => title)
            .indexOf(hash)}00vw)`
        },
        ...style
      }}
    >
      {pages.map(({ title, body }) => {
        return (
          <section key={title}>
            <div className={`container ${classes.eachBody}`}>{body}</div>
          </section>
        )
      })}
    </div>
  )
}
