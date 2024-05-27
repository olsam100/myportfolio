import React, { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { Header, HashLink, Footer } from './components'

const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChangeTheme = (e) => {
      setTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChangeTheme)

    setTheme(mediaQuery.matches ? 'dark' : 'light')

    return () => {
      mediaQuery.removeEventListener('change', handleChangeTheme)
    }
  }, [])

  useEffect(() => {
    theme === 'dark'
      ? document.documentElement.setAttribute('data-theme', 'dark')
      : document.documentElement.setAttribute('data-theme', 'light')
  }, [theme])

  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HashLink />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
