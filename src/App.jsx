import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from 'pages/main'
import Blog from 'pages/blog'
import Post from 'pages/posts'
import AAboutUs from 'pages/about-us'
import './index.css'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/posts/:id' element={<Post />} />
          <Route path='/about-us' element={<AAboutUs />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
