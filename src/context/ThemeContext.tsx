import { ReactNode, createContext, useContext, useState } from 'react'

export type Theme = 'dark' | 'light' | 'auto'

interface ThemeContext {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContext | null>(null)

const THEME_KEY = 'theme'

const loadTheme = (): Theme => {
  const savedTheme = localStorage.getItem(THEME_KEY)

  if (!savedTheme) {
    return window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  }

  return savedTheme as Theme
}

const saveTheme = (theme: Theme) => {
  localStorage.setItem(THEME_KEY, theme)
}

export const ThemeProvider = ({ children }: { children?: ReactNode }) => {
  const [theme, setTheme] = useState(loadTheme)

  const updateTheme = (theme: Theme) => {
    saveTheme(theme)
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

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
