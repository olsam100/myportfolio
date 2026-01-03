import React from 'react'
import './home.scss'
import iamolumide from '../../assets/images/olumide.png'

const cv = process.env.PUBLIC_URL + '/oladunjoyeolumide.pdf'

const Home = () => {
  return (
    <div className='home'>
      <div className='homewrapper'>
        <div className='leftcontent'>
          <div className='leftcontenttop'>
            <p className='devintro'>
              Hi, <br />I am <span className='devname'>Olumide</span>
              <br />
              Software Developer
            </p>
          </div>
          <div className='leftcontentbottom'>
            <a href={cv} className='downloadbtn' download>
              Download CV
            </a>
          </div>
        </div>
        <div className='rightcontent'>
          <img
            src={iamolumide}
            alt='Oladunjoye Olumide'
            loading='lazy'
            className='devimg'
            title='Oladunjoye Olumide'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
