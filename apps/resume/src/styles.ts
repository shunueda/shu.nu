import { IStylesOptions } from 'docx'

const styles = {
  default: {
    hyperlink: {},
    document: {
      paragraph: {
        spacing: {
          line: 300
        }
      },
      run: {
        font: 'Garamond',
        size: `11pt`
      }
    }
  }
} satisfies IStylesOptions

export default styles
