import {
  AlignmentType,
  convertInchesToTwip,
  INumberingOptions,
  LevelFormat
} from 'docx'

export const NUMBERING_REFERENCE = 'numbering_reference'

const numbering = {
  config: [
    {
      reference: NUMBERING_REFERENCE,
      levels: [
        {
          level: 0,
          format: LevelFormat.BULLET,
          text: '\u2022',
          alignment: AlignmentType.LEFT,
          style: {
            paragraph: {
              indent: {
                left: convertInchesToTwip(0.5),
                hanging: convertInchesToTwip(0.25)
              }
            }
          }
        }
      ]
    }
  ]
} satisfies INumberingOptions

export default numbering
