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
            <a className={`link link--carpo`}>Contact Me</a>
          </div>
        </div>
      </div>
    </>
  )
}
