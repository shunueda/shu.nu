export interface Profile {
  name: string
  profile_picture: string
  headline: string
  location: string
  about: string
  experience: Experience[]
  education: Education[]
}

export interface Experience {
  title: string
  company: string
  location: string
  duration: string
  description: string
  skills: string[]
}

export interface Education {
  institution: string
  degree: string
  field_of_study: string
  duration: string
}
