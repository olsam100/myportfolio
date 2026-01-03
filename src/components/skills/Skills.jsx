import React from 'react'

import './skills.scss'

const Skills = () => {
  const items = [
    {
      id: 1,
      skill: 'Water Systems Design',
    },
    {
      id: 2,
      skill: 'Fluid Mechanics',
    },
    {
      id: 3,
      skill: 'Hydrology & Hydraulics',
    },
    {
      id: 4,
      skill: 'Proficiency in Python & JavaScript',
    },
    {
      id: 5,
      skill: 'Attention to Detail & Precision',
    },
    {
      id: 6,
      skill: 'Communication',
    },
  ]

  return (
    <div className='skills_box'>
      {items.map(({ id, skill }) => (
        <div key={id} className=''>
          <div className=''>
            <p>{skill}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
