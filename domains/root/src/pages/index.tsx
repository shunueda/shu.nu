import Navbar from '~/src/components/navbar'
import classes from '~/src/pages/index.module.scss'

export default function Home() {
  return (
    <div className={`container ${classes.root}`}>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.body}>
        <section>
          <div style={{ background: 'red' }} />
        </section>
        <section>
          <div style={{ background: 'green' }} />
        </section>
        <section>
          <div style={{ background: 'yellow' }} />
        </section>
      </div>
    </div>
  )
}
