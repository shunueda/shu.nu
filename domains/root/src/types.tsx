export interface Page {
  title: string
  body: JSX.Element
}

export interface Experience {
  company: any
  description: any
  duration: any
  link?: any
  location: any
  position: any
  thumbnail?: any
}

export interface BodyProps {
  experiences: string
}
