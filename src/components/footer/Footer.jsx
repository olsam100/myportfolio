import React from 'react'
import '../footer/footer.scss'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className='footer'>
      <span>&copy; {currentYear}</span>
      <span>Oladunjoye Olumide</span>
    </footer>
  )
}

export default Footer
