import React from 'react'
import { About, Skills, Projects, Contact, Home } from '../index'
import './hashlink.scss'

const Hashlink = () => {
  return (
    <div className='section-container'>
      <section className='section' id='home'>
        <Home />
      </section>
      <section className='section' id='about'>
        <About />
      </section>
      <section className='section' id='skills'>
        <Skills />
      </section>
      <section className='section' id='projects'>
        <Projects />
      </section>
      <section className='section' id='contact'>
        <Contact />
      </section>
    </div>
  )
}

export default Hashlink
