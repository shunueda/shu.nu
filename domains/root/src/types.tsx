export interface Page {
  title: string
  body: JSX.Element
}

export interface Experience {
  company: string
  description: string
  duration: string
  link?: string
  location: string
  position: string
  thumbnail?: string
}

export interface BodyProps {
  experiences: string
}
