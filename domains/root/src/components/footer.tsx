import classes from './footer.module.scss'

export default function Footer() {
  return (
    <section className={classes.root}>
      <div>© {new Date().getFullYear()} Shun Ueda. All rights reserved.</div>
      <div>
        <a href=''>Privacy Policy</a>
      </div>
    </section>
  )
}
