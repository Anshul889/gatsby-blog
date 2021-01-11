import { useState } from 'react'
export const useDarkMode = () => {
  const [theme, setTheme] = useState(
    (typeof window !== 'undefined' && window.localStorage.getItem('theme')) ||
      'light'
  )

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  return [theme, toggleTheme]
}
