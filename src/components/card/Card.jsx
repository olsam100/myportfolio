import React from 'react'
import './card.scss'

const Card = ({ children, props }) => {
  return (
    <div className='card' {...props}>
      {children}
    </div>
  )
}

Card.Image = ({ children, props }) => {
  return (
    <div className='cardimg' {...props}>
      {children}
    </div>
  )
}

Card.Title = ({ children }) => {
  return <p className='cardtitle'>{children}</p>
}

Card.GithubLink = ({ children }) => {
  return <div className='cardlink'>{children}</div>
}

Card.LiveLink = ({ children }) => {
  return <div className='cardlink'>{children}</div>
}

export default Card
