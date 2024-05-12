import { ExternalHyperlink, TextRun } from 'docx'

export default function createHyperLink(url: string, prefix = 'https://') {
  return new ExternalHyperlink({
    children: [
      new TextRun({
        text: url,
        style: 'Hyperlink'
      })
    ],
    link: url.startsWith(prefix) ? url : `${prefix}${url}`
  })
}
