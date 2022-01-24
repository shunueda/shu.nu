import { useState } from 'react'
import styles from './navbar.module.scss'

export default function Navbar() {
  const [currPage, setPage] = useState(0)
  return (
    <>
      <div className={styles.root}>
        {['0', '1', '2', '3', '4'].map((item, index) => {
          return (
            <div
              key={item}
              onClick={() => {
                setPage(index)
              }}
            >
              <span
                style={{
                  borderColor: currPage === index ? 'black' : 'transparent'
                }}
              >
                {item}
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}
