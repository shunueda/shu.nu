export type Iso8601 = string

export interface Award {
  awarder?: string
  date?: Iso8601
  summary?: string
  title?: string
}

export interface Profile {
  network?: string
  url?: string
  username?: string
}

export interface Location {
  address?: string
  city?: string
  countryCode?: string
  postalCode?: string
  region?: string
}

export interface Basics {
  email?: string
  label?: string
  location?: Location
  name: string
  phone?: string
  picture?: string
  profiles?: Profile[]
  summary?: string
  website?: string
}

export interface Education {
  area?: string
  courses?: string[]
  endDate?: Iso8601
  gpa?: string
  institution?: string
  startDate?: Iso8601
  studyType?: string
}

export interface Interest {
  keywords?: string[]
  name?: string
}

export interface Language {
  fluency?: string
  language?: string
}

export interface Publication {
  name?: string
  publisher?: string
  releaseDate?: Iso8601
  summary?: string
  website?: string
}

export interface Reference {
  name?: string
  reference?: string
}

export interface Skill {
  keywords?: string[]
  level?: string
  name?: string
}

export interface Volunteer {
  endDate?: Iso8601
  highlights?: string[]
  organization?: string
  position?: string
  startDate?: Iso8601
  summary?: string
  website?: string
}

export interface Work {
  company?: string
  endDate?: Iso8601
  highlights?: string[]
  position?: string
  startDate?: Iso8601
  summary?: string
  website?: string
}

export interface Certificate {
  name: string
  date?: Iso8601
  url?: string
  issuer?: string
}

export interface Meta {
  canonical?: string
  lastModified?: string
  version?: string
}

export interface Project {
  description?: string
  endDate?: Iso8601
  entity?: string
  highlights?: string[]
  keywords?: string[]
  name?: string
  roles?: string[]
  startDate?: Iso8601
  type?: string
  url?: string
}

export interface LinkedInProfile {
  $schema?: string
  awards?: Award[]
  basics?: Basics
  certificates: Certificate[]
  education?: Education[]
  interests?: Interest[]
  languages?: Language[]
  meta?: Meta
  projects?: Project[]
  publications?: Publication[]
  references?: Reference[]
  skills?: Skill[]
  volunteer?: Volunteer[]
  work?: Work[]
}
