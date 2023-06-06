import { MdDarkMode, MdSunny } from 'react-icons/md'
import { useTheme } from 'context/ThemeContext'

import './ThemeSwitcher.css'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('dark')
    }
  }

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      {theme === 'dark' && <MdDarkMode size='1.2em' />}
      {theme === 'light' && <MdSunny size='1.2em' />}
    </button>
  )
}
