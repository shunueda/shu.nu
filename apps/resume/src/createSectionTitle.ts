import { Paragraph, TextRun } from 'docx'

export default function createSectionTitle(sectionTitle: string) {
  return new Paragraph({
    children: [
      new TextRun({
        text: sectionTitle,
        bold: true,
        allCaps: true,
        break: 1,
        size: '13pt'
      })
    ],
    thematicBreak: true
  })
}
