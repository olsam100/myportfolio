import React from 'react'
import { Link } from 'react-router-dom'
import iamolumide from '../../assets/images/olumide.png'
import { Projects, Skills } from 'components'
import { useTheme } from '../../context/theme'

const contactDetails = [
  {
    id: 1,
    name: 'location',
    value: 'Nigeria',
  },
  {
    id: 2,
    name: 'phone',
    value: '+2348068384489',
  },
  {
    id: 3,
    name: 'web',
    value: 'http://www.olumideoladunjoye.me',
  },
  {
    id: 4,
    name: 'email',
    value: 'olumideoladunjoye@me',
  },
]

const Portfolio = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className='portfolio'>
      {/* Header Section */}
      <header className='portfolio_header'>
        <div className='header_container'>
          <div className='header_logo'>
            <h3>OO</h3>
          </div>
          <nav className='header_nav'>
            <Link to='/blog' className='nav_link'>
              Blog
            </Link>
            <button
              className='theme_toggle'
              onClick={toggleTheme}
              aria-label='Toggle theme'
            >
              {theme === 'dark' ? (
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <circle cx='12' cy='12' r='5' />
                  <line x1='12' y1='1' x2='12' y2='3' />
                  <line x1='12' y1='21' x2='12' y2='23' />
                  <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
                  <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
                  <line x1='1' y1='12' x2='3' y2='12' />
                  <line x1='21' y1='12' x2='23' y2='12' />
                  <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
                  <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
                </svg>
              ) : (
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      <div className='portfolio_container'>
        <div className='portfolio_wrapper'>
          {/* first row */}
          <div className='portfolio_row'>
            <div className='portfolio_left avatar_left'>
              <div className='devavatar_wrapper'>
                <img
                  width={236}
                  height={236}
                  src={iamolumide}
                  alt='Oladunjoye Olumide'
                  loading='lazy'
                  className='devavatar'
                  title='Oladunjoye Olumide'
                />
              </div>
            </div>
            <div className='portfolio_right avatar_content'>
              <div className='brand'>
                <h1>
                  <span>
                    <p className='firstname'>Olumide</p>
                    <p className='lastname'>{'Oladunjoye'.toUpperCase()}</p>
                  </span>
                </h1>
                <p className='secondary_title'>Water engineering enthusiast</p>
              </div>

              <div className='avatar_contact'>
                {contactDetails.map((contact) => {
                  const { id, name, value } = contact

                  return (
                    <div key={id} className='contact_title_wrapper'>
                      <h3 className='contact_title'>{name}</h3>
                      {value.startsWith('htt') ? (
                        <a
                          href={value}
                          target='_blank'
                          rel='noreferrer'
                          className='contact_subtitle'
                        >
                          {value}
                        </a>
                      ) : (
                        <p className='contact_subtitle'>{value}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* 2nd row */}
          <div className='portfolio_row'>
            <div className='portfolio_left about_wrapper'>
              <div className='about_wrapper_inner'>
                <p className='about_left'>intro</p>
                <p className='about_left_text'>What I am all about</p>
              </div>
            </div>
            <div className='portfolio_right about_content'>
              I am Olumide, a graduate of Civil Engineering with interest in the
              availability of good and quality water for all irrespective of
              location or enviroment.
            </div>
          </div>
          {/* 3rd row starts */}
          <div className='portfolio_row'>
            <div className='portfolio_left expertise_wrapper'>
              <div className='expertise_wrapper_inner'>
                <p className='about_left'>expertise</p>
                <p className='about_left_text'>What I am all about</p>
              </div>
            </div>
            <div className='portfolio_right expertise_content'>
              <Projects />
            </div>
          </div>
          {/* 3rd row ends */}

          {/* 4th row starts - skills */}
          <div className='portfolio_row'>
            <div className='portfolio_left skills_wrapper'>
              <div className='skills_wrapper_inner'>
                <p className='about_left'>skills</p>
                <p className='about_left_text'>What I am all about</p>
              </div>
            </div>
            <div className='portfolio_right skills_content'>
              <Skills />
            </div>
          </div>
          {/* 4th row ends */}

          {/* 5th row - experience */}
          <div className='portfolio_row'>
            <div className='portfolio_left experience_wrapper'>
              <div className='experience_wrapper_inner'>
                <p className='about_left'>experience</p>
                <p className='about_left_text'>Yes, I have been around</p>
              </div>
            </div>
            <div className='portfolio_right experience_content'>
              <div className='education_content_wrapper'>
                {/* 1st experience */}
                <div className='education_container'>
                  <div className='vertical_border_wrapper'>
                    <span className='yellow_circle'></span>
                    <span className='vertical_border'></span>
                  </div>
                  <div className='education_item_container'>
                    <div className='education_item_container_left'>
                      <p>2024 - Present</p>
                      <p>VAM properties Ltd</p>
                      <p>Consulting Engineer</p>
                      <p>Lagos & Ogun</p>
                    </div>
                    <div className='education_item_container_right'>
                      <p>
                        Determination of the hydraulic properties and the
                        compressive strength of concrete with partially replaced
                        coarse aggregate with plastic waste and palm kernel
                        shell
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2nd experience */}
                <div className='education_container'>
                  <div className='vertical_border_wrapper'>
                    <span className='yellow_circle'></span>
                    <span className='vertical_border'></span>
                  </div>
                  <div className='education_item_container'>
                    <div className='education_item_container_left'>
                      <p>2019 - 2023</p>
                      <p>Yayn Creatives</p>
                      <p>Project Engineer</p>
                      <p>Lagos</p>
                    </div>
                    <div className='education_item_container_right'>
                      <p>
                        Determination of the hydraulic properties and the
                        compressive strength of concrete with partially replaced
                        coarse aggregate with plastic waste and palm kernel
                        shell
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 6th - education */}
          <div className='portfolio_row'>
            <div className='portfolio_left education_wrapper'>
              <div className='education_wrapper_inner'>
                <p className='about_left'>education</p>
                <p className='about_left_text'>Yes, I have been around</p>
              </div>
            </div>
            <div className='portfolio_right education_content'>
              <div className='education_content_wrapper'>
                {/* 1st school */}
                <div className='education_container'>
                  <div className='vertical_border_wrapper'>
                    <span className='yellow_circle'></span>
                    <span className='vertical_border'></span>
                  </div>
                  <div className='education_item_container'>
                    <div className='education_item_container_left'>
                      <p>2024</p>
                      <p>University of Lagos</p>
                      <p>
                        Master of Science in Civil and Environmental Engineering
                      </p>
                      <p>Akoka, Lagos</p>
                    </div>
                    <div className='education_item_container_right'>
                      <p>
                        Determination of the hydraulic properties and the
                        compressive strength of concrete with partially replaced
                        coarse aggregate with plastic waste and palm kernel
                        shell
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2nd school */}
                <div className='education_container'>
                  <div className='vertical_border_wrapper'>
                    <span className='yellow_circle'></span>
                    <span className='vertical_border'></span>
                  </div>
                  <div className='education_item_container'>
                    <div className='education_item_container_left'>
                      <p>2016</p>
                      <p>Aptech Computer Education</p>
                      <p>Diploma in Java Programming</p>
                      <p>Enugu Center</p>
                    </div>
                    <div className='education_item_container_right'>
                      <p>
                        Determination of the hydraulic properties and the
                        compressive strength of concrete with partially replaced
                        coarse aggregate with plastic waste and palm kernel
                        shell
                      </p>
                    </div>
                  </div>
                </div>
                {/* 3rd school */}
                <div className='education_container'>
                  <div className='vertical_border_wrapper'>
                    <span className='yellow_circle'></span>
                    <span className='vertical_border'></span>
                  </div>
                  <div className='education_item_container'>
                    <div className='education_item_container_left'>
                      <p>2015</p>
                      <p>Obafemi Awolowo University</p>
                      <p>Bachelor of Science in Civil Engineering</p>
                      <p>Ile-Ife, Osun State</p>
                    </div>
                    <div className='education_item_container_right'>
                      <p>
                        Traffic Violation Study at Road 2-Road 4 Intersection,
                        Obafemi Awolowo University, Ile-Ife, Osun State,
                        Nigeria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 7th-profile */}
          <div className='portfolio_row'>
            <div className='portfolio_left profile_wrapper'>
              <div className='profile_wrapper_inner'>
                <p className='about_left'>profile</p>
                <p className='about_left_text'>Yes, I have been around</p>
              </div>
            </div>
            <div className='portfolio_right profile_content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui est
              tempore commodi sit velit quae sapiente nostrum alias, corrupti
              culpa accusantium saepe adipisci! Quod, animi dolores. Nesciunt
              reprehenderit autem consectetur.
            </div>
          </div>
          {/* 8th-awards */}
          <div className='portfolio_row'>
            <div className='portfolio_left awards_wrapper'>
              <div className='awards_wrapper_inner'>
                <p className='about_left'>awards</p>
                <p className='about_left_text'>Yes, I have been around</p>
              </div>
            </div>
            <div className='portfolio_right awards_content'>
              <span className='award_span'>
                <p>
                  Late Funmi Adesile Prize Memorial Prize for Academic
                  Excellence as Best Graduating Student in the School of
                  Engineering, Moshood Abiola Polytechnic, Abeokuta.
                </p>
                <p className='award_year'>2008</p>
              </span>
              <span className='award_span'>
                <p>
                  Director's of Engineering Prize for the Best Graduating
                  Student in the School of Engineering, Moshood Abiola
                  Polytechnic, Abeokuta.
                </p>
                <p className='award_year'>2008</p>
              </span>
              <span className='award_span'>
                <p>
                  National Alumni Association Prize for Excellence for the Best
                  Graduating Student in the School of Engineering, Moshood
                  Abiola Polytechnic, Abeokuta.
                </p>
                <p className='award_year'>2008</p>
              </span>
            </div>
          </div>
          {/* 9th-portfolio */}
          <div className='portfolio_row'>
            <div className='portfolio_left portfolio_wrapper'>
              <div className='portfolio_wrapper_inner'>
                <p className='about_left'>portfolio</p>
                <p className='about_left_text'>Yes, I have been around</p>
              </div>
            </div>
            <div className='portfolio_right portfolio_content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui est
              tempore commodi sit velit quae sapiente nostrum alias, corrupti
              culpa accusantium saepe adipisci! Quod, animi dolores. Nesciunt
              reprehenderit autem consectetur.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
