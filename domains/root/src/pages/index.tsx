import Navbar from '~/src/components/navbar'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
    </div>
  )
}
