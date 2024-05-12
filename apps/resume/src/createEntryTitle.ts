import {
  IParagraphOptions,
  IRunOptions,
  Paragraph,
  Tab,
  TabStopPosition,
  TabStopType,
  TextRun
} from 'docx'

export default function createEntryTitle(
  leftTitle: string,
  rightTitle: string,
  style: {
    parent?: IParagraphOptions
    left?: IRunOptions
    right?: IRunOptions
  } = {}
) {
  return new Paragraph({
    ...{
      spacing: {
        before: 100
      },
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX
        }
      ],
      children: [
        new TextRun({
          ...{
            text: leftTitle,
            bold: true
          },
          ...style.left
        }),
        new TextRun({
          ...{
            children: [new Tab(), rightTitle]
          },
          ...style.right
        })
      ]
    },
    ...style.parent
  })
}
