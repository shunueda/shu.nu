import classes from './home.module.scss'

export default function Home() {
  return (
    <>
      <div className={`row ${classes.root}`}>
        <div className={`col-md-auto`}>
          <div className={classes.imageArea} />
        </div>
        <div className={`col-md-auto ${classes.textArea}`}>
          <h2>Full Stack Dev @ Lehigh</h2>
          <h1>Shun Ueda</h1>
          <div className={`content__item ${classes.contact}`}>
            <a className={`link link--carme`} href={'/#contact'}>
              Say Hello →
              <svg
                className='link__graphic link__graphic--stroke link__graphic--scribble'
                width='100%'
                height='9'
                viewBox='0 0 101 9'
              >
                <path
                  d='M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294'
                  pathLength='1'
                  stroke='#a9a9a9'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
