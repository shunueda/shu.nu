import { Page } from '~/src/types'
import classes from './slider.module.scss'

interface Props {
  pages: Page[]
  hash: string
}

export default function Slider({ pages, hash }: Props) {
  return (
    <div
      className={classes.body}
      style={{
        marginLeft: `calc(calc(-1 * calc(100vw - 100%) / 2) - ${pages
          .map(({ title }) => title)
          .indexOf(hash)}00vw)`
      }}
    >
      {pages.map(({ title, body }) => {
        return (
          <section key={title}>
            <div style={{ background: 'red' }} className='container'>
              body
            </div>
          </section>
        )
      })}
    </div>
  )
}
