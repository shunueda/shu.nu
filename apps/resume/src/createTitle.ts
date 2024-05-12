import { AlignmentType, Paragraph, TextRun } from 'docx'
import { XmlComponent } from 'docx/build/file/xml-components'
import { ResumeFormat } from 'shared'
import createHyperLink from './createHyperLink'
import { interleave } from './util'

export default function createTitle(resume: ResumeFormat): Paragraph {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({
        text: resume.name,
        size: '20pt',
        bold: true
      }),
      new TextRun({
        break: 1
      }),
      ...interleave<XmlComponent>(
        [
          createHyperLink(resume.email, 'mailto:'),
          new TextRun(resume.phone),
          createHyperLink(resume.website),
          createHyperLink(resume.github)
        ],
        new TextRun(' | ')
      )
    ]
  })
}
