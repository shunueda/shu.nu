import { load } from 'cheerio'
import * as fs from 'node:fs'
import { Profile } from 'shared'

export default function parseProfile(html: string): Profile {
  const $ = load(html)

  fs.writeFileSync('html.txt', html, 'utf-8')

  const profile: Profile = {
    name: $('h1.text-heading-xlarge').text().trim(),
    profile_picture:
      $('img.pv-top-card-profile-picture__image').attr('src') || '',
    headline: $('div.text-body-medium.break-words').text().trim(),
    location: $('span.text-body-small.inline.t-black--light.break-words')
      .text()
      .trim(),
    about: $('section.pv-about-section').find('p').text().trim(),
    experience: [],
    education: []
  }

  $('section[id="experience-section"] li.pv-entity__position-group-pager').each(
    (_, element) => {
      const title = $(element).find('h3.t-16.t-black.t-bold').text().trim()
      const company = $(element)
        .find('p.pv-entity__secondary-title')
        .text()
        .trim()
      const location = $(element)
        .find('h4.pv-entity__location span:nth-child(2)')
        .text()
        .trim()
      const duration = $(element)
        .find('h4.pv-entity__date-range span:nth-child(2)')
        .text()
        .trim()
      const description = $(element)
        .find('div.pv-entity__extra-details')
        .text()
        .trim()

      const skills: string[] = []
      $(element)
        .find('.pv-skill-entity__skill-name')
        .each((_, skillElement) => {
          skills.push($(skillElement).text().trim())
        })

      profile.experience.push({
        title,
        company,
        location,
        duration,
        description,
        skills
      })
    }
  )

  $('section[id="education-section"] li.pv-profile-section__list-item').each(
    (_, element) => {
      const institution = $(element)
        .find('h3.pv-entity__school-name')
        .text()
        .trim()
      const degree = 'Dual Degree'
      const field_of_study =
        'BS in Computer Science & Engineering; BS in Mathematics'
      const duration = $(element)
        .find('p.pv-entity__dates span:nth-child(2)')
        .text()
        .trim()

      profile.education.push({ institution, degree, field_of_study, duration })
    }
  )

  return profile
}
