import React from 'react'
import { Link } from 'react-router-dom'
import iamolumide from '../../assets/images/olumide.png'
import { Projects } from 'components'
import { useTheme } from '../../context/theme'
import DarkIcon from 'assets/darkIcon'
import LightIcon from 'assets/lightIcon'

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
    value: 'http://www.samoladunjoye.com',
  },
  {
    id: 4,
    name: 'email',
    value: 'olumide@samoladunjoye.com',
  },
]

const researchInterest = [
  {
    name: 'Water and wastewater treatment process optimization',
  },
  {
    name: 'Environmental and hydrological modelling',
  },
  {
    name: 'Decision-support systems for water resources',
  },
  {
    name: 'Pollution control and waste management',
  },
  {
    name: 'Membrane and biological treatment processes',
  },
  {
    name: 'Digital twins and soft-sensor development',
  },
  {
    name: 'Explainable AI for environmental systems',
  },
  {
    name: 'Climate-resilient water infrastructure',
  },
]

const technicalSkills = [
  {
    category: 'Environmental & Modelling',
    skills: [
      'Water & wastewater treatment',
      'Hydrology',
      'Pollution control',
      'Biosolids management',
    ],
  },
  {
    category: 'Computational & Data',
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'TensorFlow/Keras',
      'XGBoost',
      'SHAP',
      'LIME',
    ],
  },
  {
    category: 'Software & Visualization',
    skills: ['Streamlit', 'FastAPI', 'React', 'JavaScript', 'Plotly', 'Docker'],
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
              {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
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
              Civil and Environmental Engineer with strong interests in water
              and wastewater treatment process optimization, environmental
              modelling, and decision-support systems. Experienced in
              integrating engineering fundamentals with data-driven methods,
              machine learning, and software development to support sustainable
              and climate-resilient water infrastructure.
            </div>
          </div>

          {/* 3rd-profile */}
          <div className='portfolio_row'>
            <div className='portfolio_left profile_wrapper'>
              <div className='profile_wrapper_inner'>
                <p className='about_left'>interest</p>
                <p className='about_left_text'>Scholarly intersts</p>
              </div>
            </div>
            <div className='portfolio_right profile_content'>
              <ul className='interest_lists'>
                {researchInterest.map((interest) => (
                  <li key={interest.name} className='interest_item'>
                    {interest.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='portfolio_row'>
            <div className='portfolio_left skills_wrapper'>
              <div className='skills_wrapper_inner'>
                <p className='about_left'>expertise</p>
                <p className='about_left_text'>Core Competencies</p>
              </div>
            </div>
            <div className='portfolio_right skills_content'>
              <div className='skills_wrapper'>
                <Projects />
              </div>
            </div>
          </div>
          {/* 4th row  Interest starts */}

          <div className='portfolio_row'>
            <div className='portfolio_left profile_wrapper'>
              <div className='profile_wrapper_inner'>
                <p className='about_left'>skills</p>
                <p className='about_left_text'>Development Stack</p>
              </div>
            </div>
            <div className='portfolio_right profile_content'>
              {technicalSkills.map((item, index) => (
                <div key={index} className='skill_group'>
                  <h3 className='skill_category_title'>{item.category}</h3>
                  <div className='skill_list'>
                    {item.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className='skill_item'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4th row ends */}

          {/* 5th row - experience */}
          <div className='portfolio_row'>
            <div className='portfolio_left skills_wrapper'>
              <div className='skills_wrapper_inner'>
                <p className='about_left'>experience</p>
                <p className='about_left_text'>Where I've worked</p>
              </div>
            </div>
            <div className='portfolio_right skills_content'>
              <div className='skills_wrapper'>
                {/* 1st experience */}
                <div className='education_container'>
                  <div className='vertical_border_wrapper'>
                    <span className='yellow_circle'></span>
                    <span className='vertical_border'></span>
                  </div>
                  <div className='education_item_container'>
                    <div className='education_item_container_left'>
                      <p>2024 - Present</p>
                      <p>Yayn Creatives</p>
                      <p>Project Engineer</p>
                      <p>Nigeria</p>
                    </div>
                    <div className='education_item_container_right'>
                      <ul>
                        <li>
                          Design and implementation of water purification
                          systems
                        </li>
                        <li>Design sewer networks anad observaion stations </li>
                        <li>
                          Ensure potable water meets health and safety
                          standaards
                        </li>
                        <li>Supervise technicians and operators</li>
                      </ul>
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
                      <p>Designated Fortune Designs & Constructions Limited</p>
                      <p>Project Engineer</p>
                      <p>Ogun</p>
                    </div>
                    <div className='education_item_container_right'>
                      <ul>
                        <li>
                          Consulting engineer for water profiling and treatment
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* 3rd experience */}
                <div className='education_container'>
                  <div className='vertical_border_wrapper'>
                    <span className='yellow_circle'></span>
                    <span className='vertical_border'></span>
                  </div>
                  <div className='education_item_container'>
                    <div className='education_item_container_left'>
                      <p>2017 - 2019</p>
                      <p>VLC Limited, Lagos</p>
                      <p>Site Engineer</p>
                      <p>Lagos</p>
                    </div>
                    <div className='education_item_container_right'>
                      <ul>
                        <li>Construction of greenery area for relaxation</li>
                        <li>
                          Design and construction of 6m x 4m xm septic tank
                        </li>
                        <li>
                          Interior and Exterior finishing for 5 units of fully
                          detached apartments
                        </li>
                      </ul>
                      <p></p>
                    </div>
                  </div>
                </div>
                {/* 4th experience */}
                <div className='education_container'>
                  <div className='vertical_border_wrapper'>
                    <span className='yellow_circle'></span>
                    <span className='vertical_border'></span>
                  </div>
                  <div className='education_item_container'>
                    <div className='education_item_container_left'>
                      <p>2016</p>
                      <p>Enugu State Ministry of Works </p>
                      <p>Laboratory Assistant</p>
                      <p>Lagos</p>
                    </div>
                    <div className='education_item_container_right'>
                      <ul>
                        <li>
                          Collection of soil samples across the states for the
                          purpose of road construction.
                        </li>
                        <li>
                          Assited in carrying out various tests on soil samples
                          including Atterberg, Liquid and plastic limits,
                        </li>
                        <li>Soil tests results analysis</li>
                      </ul>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6th - education */}
          <div className='portfolio_row'>
            <div className='portfolio_left profile_wrapper'>
              <div className='profile_wrapper_inner'>
                <p className='about_left'>education</p>
                <p className='about_left_text'>My Acaademic Journey</p>
              </div>
            </div>
            <div className='portfolio_right profile_content'>
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
                      <p></p>
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
                      <p>Ile-Ife, Nigeria</p>
                    </div>
                    <div className='education_item_container_right'>
                      <p>
                        Traffic Violation Study at Road 2 – Road 4 Intersection
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4th school */}
                <div className='education_container'>
                  <div className='vertical_border_wrapper'>
                    <span className='yellow_circle'></span>
                    <span className='vertical_border'></span>
                  </div>
                  <div className='education_item_container'>
                    <div className='education_item_container_left'>
                      <p>2008</p>
                      <p>Moshood Abiola Polytehnic</p>
                      <p>National Diploma in Civil Engineering</p>
                      <p>Ogun State, Nigeria</p>
                    </div>
                    <div className='education_item_container_right'>
                      <p>
                        {/* Traffic Violation Study at Road 2-Road 4 Intersection,
                        Obafemi Awolowo University, Ile-Ife, Osun State,
                        Nigeria. */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 8th-awards */}
          <div className='portfolio_row'>
            <div className='portfolio_left awards_wrapper'>
              <div className='awards_wrapper_inner'>
                <p className='about_left'>awards</p>
                <p className='about_left_text'>Recognitions and Honours</p>
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
        </div>
      </div>
    </div>
  )
}

export default Portfolio
