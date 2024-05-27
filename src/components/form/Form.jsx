import React, { useState } from 'react'
import Button from '../button/Button'
import '../form/form.scss'

const Form = () => {
  const [value, setValue] = useState({
    username: '',
    email: '',
    textarea: '',
  })

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='formControl'>
        <label htmlFor='username'>Name</label>
        <input
          type='text'
          name='username'
          value={value.username}
          onChange={handleChange}
        />
      </div>
      <div className='formControl'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          value={value.email}
          onChange={handleChange}
        />
      </div>
      <div className='formControl'>
        <label htmlFor='text'>Text</label>
        <textarea
          type='text'
          name='textarea'
          value={value.text}
          onChange={handleChange}
        />
      </div>
      <Button name='Submit' />
    </form>
  )
}

export default Form
