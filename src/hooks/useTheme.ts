import { useContext } from 'react'
import { ThemeContext } from 'context/ThemeContext'

export const useTheme = () => {
  const themeContext = useContext(ThemeContext)

  if (themeContext === null) {
    throw new Error('Can not `useTheme` outside of the `ThemeProvider`')
  }

  return {
    theme: themeContext.theme,
    setTheme: themeContext.setTheme
  }
}
