import { Paragraph, TextRun } from 'docx'
import { Education } from '../../shared'
import concatDates from './concatDates'
import createEntryTitle from './createEntryTitle'
import createSectionTitle from './createSectionTitle'

export default function createEducationSection(
  educations: Education[]
): Paragraph[] {
  return [
    createSectionTitle('Education'),
    ...educations.flatMap(education => {
      return [
        createEntryTitle(`${education.school}`, concatDates(education), {
          left: {
            size: '13pt'
          }
        }),
        new Paragraph({
          children: education.degrees.flatMap((degree, i) => [
            new TextRun({
              text: degree.type,
              italics: true,
              break: i > 0 ? 1 : 0
            }),
            new TextRun({
              text: ` in ${degree.major}`
            })
          ])
        })
      ]
    })
  ]
}
