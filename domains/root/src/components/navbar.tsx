import classes from './navbar.module.scss'

interface Props {
  sections: string[]
  hash: string
}

export default function Navbar({ sections, hash }: Props) {
  return (
    <>
      <div className={`${classes.root} row`}>
        {sections.map((item, index) => {
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
        })}
      </div>
    </>
  )
}
