import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Socials } from '../index'
import './header.scss'

const Header = () => {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerClassName = `header ${scrolling ? 'scrolled' : ''}`

  return (
    <header className={headerClassName}>
      <div className='logo'>
        <HashLink smooth to='/' className='link'>
          <h4>iamolumide</h4>
        </HashLink>
      </div>
      <div className='pagelinks'>
        <ul>
          <li>
            <HashLink to='/#' smooth='true' exact='true' className='link basic'>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth='true' to='/#about' className='link basic'>
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth='true' to='/#skills' className='link basic'>
              Skills
            </HashLink>
          </li>
          <li>
            <HashLink smooth='true' to='/#projects' className='link basic'>
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink smooth='true' to='/#contact' className='link basic'>
              Contact
            </HashLink>
          </li>
        </ul>
      </div>

      <div className='socials'>
        <Socials />
      </div>
    </header>
  )
}

export default Header
