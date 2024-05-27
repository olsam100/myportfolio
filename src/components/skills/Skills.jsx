import React from 'react'
import {
  html,
  css,
  javascript,
  reactjs,
  nodejs,
  mongodb,
  nextjs,
} from 'assets/index'
import './skills.scss'

const Skills = () => {
  const items = [
    {
      id: 1,
      skill: 'HTML5',
      icon: html,
    },
    {
      id: 2,
      skill: 'CSS',
      icon: css,
    },
    {
      id: 3,
      skill: 'JavaScript',
      icon: javascript,
    },
    {
      id: 4,
      skill: 'ReactJS',
      icon: reactjs,
    },
    {
      id: 5,
      skill: 'NodeJS',
      icon: nodejs,
    },
    {
      id: 6,
      skill: 'MongoDB',
      icon: mongodb,
    },
    {
      id: 7,
      skill: 'NextJs',
      icon: nextjs,
    },
  ]

  return (
    <div className='skills'>
      <div className='skillstitlewrapper'>
        <h1>Skills</h1>
        {/* <h1>Tech stacks</h1> */}
      </div>
      <div className='logos'>
        <div className='logos-slide'>
          {items.map(({ id, skill, icon }) => (
            <div key={id} className='menu-item'>
              <div className='imgwrapper'>
                <img src={icon} alt={skill} />
                <p>{skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
