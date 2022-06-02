
export const getThemeStyle = (theme = `light`) => ({
  backgroundColor : theme === `dark` ? `black` : `white`,
  color           : theme === `dark` ? `white` : `black`,
  borderColor     : theme === `dark` ? `white` : `black`,
  borderWidth     : `1px`,
  borderStyle     : `solid`,
  marginTop       : `24px`,
  padding         : `25px`
});
