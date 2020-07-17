// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      colorPrimary: string
      colorPrimaryLight: string
      colorSecondary: string
      colorSecondaryLight: string
      colorText: string
      colorTextMuted: string
      colorBlack: string
      colorBeige
    }
  }
}
