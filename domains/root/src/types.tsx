import { RTNode } from '@prismicio/types'

export interface Page {
  title: string
  body: JSX.Element
}

export interface Experience {
  company: [] | [RTNode, ...RTNode[]] | null | undefined
  description: [] | [RTNode, ...RTNode[]] | null | undefined
  duration: [] | [RTNode, ...RTNode[]] | null | undefined
  link?: [] | [RTNode, ...RTNode[]] | null | undefined
  location: [] | [RTNode, ...RTNode[]] | null | undefined
  position: [] | [RTNode, ...RTNode[]] | null | undefined
  thumbnail?: [] | [RTNode, ...RTNode[]] | null | undefined
}

export interface BodyProps {
  experiences: string
}
