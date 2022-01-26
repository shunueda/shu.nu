import { Page } from '~/src/types'
import classes from './navbar.module.scss'

interface Props {
  pages: Page[]
  hash: string
}

export default function Navbar({ pages, hash }: Props) {
  return (
    <>
      <div className={`${classes.root} row`}>
        {pages.map(({ title }) => {
          return (
            <div key={title} className={`${classes.box} col-md content__item`}>
              <a
                className={`${classes.text} link link--kale`}
                href={`/#${title}`}
                style={{
                  color: hash === title ? '#000000' : '#d3d3d3'
                }}
              >
                {title}
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}
