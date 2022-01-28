import { chunk } from 'lodash'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import format from 'string-format'
import useAsyncEffect from 'use-async-effect'
import { client } from '~/src/util/prismic'
import classes from './work.module.scss'

export default function Work() {
  const [body, setBody] = useState<JSX.Element[]>([<></>])
  const [paths, setPaths] = useState<number[][]>([])
  const [works, setWorks] = useState<any[]>([])
  useAsyncEffect(async () => {
    const { results } = await client.getByType('works')
    const tempWorks = results[0]?.data?.group.map(({ image, link }) => {
      return {
        image: image.url,
        link: link
      }
    })
    setWorks(tempWorks)
    const changePaths = () => {
      const temp = []
      for (let i = 0; i < tempWorks.length; i++) {
        temp.push(recalculatePaths())
      }
      setPaths(temp)
    }
    changePaths()
    const transform = setInterval(changePaths, 2000)
    return () => clearInterval(transform)
  }, [])
  useEffect(() => {
    if (!paths.length) return
    setBody(
      chunk(
        works.map(({ image, link }, i) => {
          return (
            <div className={`col-md ${classes.card}`} key={i}>
              <div
                className={classes.clip}
                style={{
                  clipPath: format(
                    `polygon({}% {}%, {}% {}%, {}% {}%, {}% {}%)`,
                    ...(paths[i].map(fluctuate) as string[])
                  )
                }}
              >
                <div className={classes.inner}>
                  <Image
                    src={image}
                    alt=''
                    style={{
                      clipPath: format(
                        `polygon({}% {}%, {}% {}%, {}% {}%, {}% {}%)`,
                        ...(paths[i].map(fluctuate) as string[])
                      )
                    }}
                  />
                </div>
              </div>
            </div>
          )
        }),
        2
      ).map(item => (
        <>
          <div className='row mt-4' />
          <div className={`row ${classes.row}`}>
            {item.length === 2
              ? item
              : [
                  ...item,
                  <div className={'col-md'} key={'open'}>
                    <div />
                  </div>
                ]}
          </div>
        </>
      )) as JSX.Element[]
    )
  }, [paths, works])
  return (
    <>
      <div className={`container-fluid ${classes.root}`}>{body}</div>
    </>
  )
}

function recalculatePaths() {
  const maxChange = 5
  return [
    [0, maxChange],
    [0, maxChange],
    [100 - maxChange, 100],
    [0, maxChange],
    [100 - maxChange, 100],
    [100 - maxChange, 100],
    [0, maxChange],
    [100 - maxChange, 100]
  ].map(([min, max]) => randomIntFromInterval(min, max))
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function fluctuate(num: number) {
  return num + 4 * (Math.random() >= 0.5 ? 1 : -1)
}
