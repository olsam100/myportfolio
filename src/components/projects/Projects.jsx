import React from 'react'
import { Card } from 'components'
import { analytics } from 'assets'
import './projects.scss'

const allProjects = [
  {
    id: 1,
    name: 'AI-Driven Water Quality Index (WQI) Classification System',
    githublink: 'https://github.com/olsam100/analytics-dashboard',
    livelink: 'https://analytics-dashboard-app.netlify.app',
    image: analytics,
  },
  {
    id: 2,
    name: 'Hydrological Time-Series Forecasting for Flood & Rainfall Prediction',
    githublink: '/#',
    livelink: '/#',
    image: '',
  },
  {
    id: 3,
    name: 'Explainable AI (XAI) for Environmental Contamination Analysis',
    githublink: '/#',
    livelink: '/#',
    image: '',
  },
  {
    id: 4,
    name: 'Digital Twin for Wastewater Treatment Process Control',
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
