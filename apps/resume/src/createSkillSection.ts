import { Paragraph, TextRun } from 'docx'
import { Skill } from 'shared'
import createSectionTitle from './createSectionTitle'
import { NUMBERING_REFERENCE } from './numbering'

export default function createSkillSection(skill: Skill) {
  return [
    createSectionTitle('Skills'),
    ...Object.entries(skill).map(([category, skills]) => {
      return new Paragraph({
        children: [
          new TextRun({
            text: `${category}: `,
            bold: true
          }),
          new TextRun(skills.join(', '))
        ],
        numbering: {
          reference: NUMBERING_REFERENCE,
          level: 0
        },
        spacing: {
          before: 50
        }
      })
    })
  ]
}
