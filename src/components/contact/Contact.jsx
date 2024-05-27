import React, { useState } from 'react'
import './contact.scss'

const Contact = () => {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleFormInput = (e) => {
    const { name, value } = e.target
    setFormInput({ ...formInput, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='contact'>
      <p className='pagetitle'>Contact</p>

      <div className='formwrapper'>
        <form onSubmit={handleSubmit} className='form'>
          <div className='formInput'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={formInput.name}
              onChange={handleFormInput}
              autoComplete='off'
            />
          </div>
          <div className='formInput'>
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={formInput.email}
              onChange={handleFormInput}
              autoComplete='off'
            />
          </div>
          <div className='formInput'>
            <textarea
              name='message'
              cols='30'
              rows='10'
              placeholder='Message'
              value={formInput.message}
              onChange={handleFormInput}
              autoComplete='off'
            />
          </div>
          <button type='submit' className='btn'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
