'use client'
import { useEffect, useRef } from 'react'
import { annotate } from 'rough-notation'

interface Props {
  text: string
}

export default function RoughNotation(props: Props) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const annotation = annotate(ref.current!, {
      type: 'highlight',
      color: '#90deda'
    })
    annotation.show()
  }, [])
  return <span ref={ref}>{props.text}</span>
}
