import { Paragraph, TextRun } from 'docx'
import { Experience } from '../../shared'
import concatDates from './concatDates'
import createEntryTitle from './createEntryTitle'
import createSectionTitle from './createSectionTitle'
import { NUMBERING_REFERENCE } from './numbering'

export default function createExperienceSection(
  experience: Experience[]
): Paragraph[] {
  let lastCompany = ''
  return [
    createSectionTitle('Experience'),
    ...experience.flatMap(experience => {
      const entry = [
        createEntryTitle(experience.position, concatDates(experience), {
          left: {
            size: '12pt'
          },
          parent: {
            spacing: {
              before: 0
            }
          }
        }),
        ...experience.descriptions.map(
          description =>
            new Paragraph({
              children: [new TextRun(description)],
              numbering: {
                reference: NUMBERING_REFERENCE,
                level: 0
              }
            })
        )
      ]
      if (experience.company !== lastCompany) {
        entry.unshift(
          createEntryTitle(experience.company, experience.location, {
            left: {
              size: '13pt'
            }
          })
        )
      }
      lastCompany = experience.company
      return entry
    })
  ]
}
