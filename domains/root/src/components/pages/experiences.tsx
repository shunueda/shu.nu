import { PrismicText } from '@prismicio/react'
import { chunk } from 'lodash'
import { useState } from 'react'
import useAsyncEffect from 'use-async-effect'
import { Experience } from '~/src/types'
import { client } from '~/src/util/prismic'
import classes from './experiences.module.scss'

export default function Experiences() {
  const [body, setBody] = useState(<></>)

  useAsyncEffect(async () => {
    const { results } = await client.getByType('experiences')
    setBody(
      chunk(
        results[0].data.group.map(
          ({ company, duration, link, position }: Experience) => {
            return (
              <div className={'col-md'} key={company}>
                <div className={classes.card}>
                  <div>
                    <h2>
                      @ <PrismicText field={company} />
                    </h2>
                    <h1>
                      <PrismicText field={position} />
                    </h1>
                    <h3>
                      <PrismicText field={duration} />
                    </h3>
                  </div>
                  <div>
                    <h4>
                      <a href=''>Learn More →</a>
                    </h4>
                  </div>
                </div>
              </div>
            )
          }
        ),
        2
      ).map(item => (
        <>
          <div className='row mt-4' />
          <div className='row'>
            {item.length === 2
              ? item
              : [
                  ...item,
                  <div className={'col-md'} key={'open'}>
                    <div className={classes.open} />
                  </div>
                ]}
          </div>
        </>
      ))
    )
  }, [])
  return <div className={`container-fluid ${classes.root}`}>{body}</div>
}
