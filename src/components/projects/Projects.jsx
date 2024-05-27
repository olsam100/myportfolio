import React from 'react'
import { Card } from 'components'
import { analytics } from 'assets'
import './projects.scss'

const allProjects = [
  {
    id: 1,
    name: 'Analytics Dashboard',
    githublink: 'https://github.com/olsam100/analytics-dashboard',
    livelink: 'https://analytics-dashboard-app.netlify.app',
    image: analytics,
  },
  {
    id: 2,
    name: 'e-commerce',
    githublink: '/#',
    livelink: '/#',
    image: '',
  },
  {
    id: 3,
    name: 'Church website',
    githublink: '/#',
    livelink: '/#',
    image: '',
  },
]

const Projects = () => {
  return (
    <div className='projectscontainer'>
      <div className='projectswrapper'>
        {allProjects.map(({ id, ...rest }) => (
          <Card key={id}>
            <Card.Image>
              <img src={rest.image} alt={rest.name} className='projectimg' />
            </Card.Image>

            <div className='cardinfo'>
              <Card.Title>{rest.name}</Card.Title>
              <div className='card_links'>
                <Card.GithubLink>
                  <a
                    href={rest.githublink}
                    className='downloadbtn'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Github
                  </a>
                </Card.GithubLink>
                <Card.LiveLink>
                  <a
                    href={rest.livelink}
                    className='downloadbtn'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Demo
                  </a>
                </Card.LiveLink>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Projects
