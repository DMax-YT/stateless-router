import { createContext } from 'react'

export type Theme = 'dark' | 'light' | 'auto'

export interface ThemeContext {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContext | null>(null)
