import { useState } from 'react'
export const useDarkMode = () => {
  let themecolor

  if (typeof window !== 'undefined' && window.localStorage.getItem('theme')) {
    themecolor = window.localStorage.getItem('theme') 
  } else {
    themecolor = 'light'
  }
  const [theme, setTheme] = useState(themecolor)
    

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
