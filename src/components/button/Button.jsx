import React from 'react'
import '../button/button.scss'

const Button = ({ children }) => {
  return <button className='btn'>{children}</button>
}

Button.Name = ({ children }) => {
  return <p>{children}</p>
}

export default Button
