export interface Profile {
  name: string
  email: string
  phone: string
  github: string
  website: string
  education: Education[]
  experience: Experience[]
  skill: Skill
}

export interface Education {
  school: string
  start_date: string
  end_date: string
  degrees: Degree[]
}

export interface Degree {
  type: string
  major: string
}

export interface Experience {
  company: string
  position: string
  descriptions: string[]
  location: string
  start_date: string
  end_date: string
}

export interface Skill extends Record<string, string[]> {}
