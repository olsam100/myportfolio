import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTheme } from '../../context/theme'
import { blogPosts } from '../../data/blog-data'

const headerItems = [
  {
    id: 1,
    name: 'home',
    link: '/',
  },
  {
    id: 2,
    name: 'posts',
    link: '/posts',
  },
  {
    id: 3,
    name: 'about us',
    link: '/about-us',
  },
]

const Blog = () => {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='blog'>
      <header className={`blog_header ${isScrolled ? 'scrolled' : ''}`}>
        <div className='blog_header_container'>
          <div className='blog_logo'>
            <h3>OO</h3>
          </div>
          <nav className='blog_nav'>
            <ul className='blog_nav_list'>
              {headerItems.map((items) => {
                const { id, name, link } = items

                return (
                  <li key={id} className='blog_nav_item'>
                    <Link to={link} className='blog_nav_link'>
                      {name}
                    </Link>
                  </li>
                )
              })}
            </ul>
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

      <main className='blog_main'>
        <div className='blog_main_container'>
          <h1 className='blog_welcome'>Welcome to my personal blog</h1>

          <div className='blog_posts'>
            {blogPosts.map((post) => {
              const { id, title, image, excerpt, author, date, category } = post

              return (
                <article key={id} className='blog_post_card'>
                  <Link to={`/posts/${id}`} className='blog_post_link'>
                    <div className='blog_post_image_wrapper'>
                      <img
                        src={image}
                        alt={title}
                        className='blog_post_image'
                      />
                    </div>
                  </Link>
                  <div className='blog_post_content'>
                    <Link to={`/posts/${id}`} className='blog_post_title_link'>
                      <h2 className='blog_post_title'>{title}</h2>
                    </Link>
                    <div className='blog_post_meta'>
                      <span className='blog_post_author'>by {author}</span>
                      <span className='blog_post_category'>{category}</span>
                      <span className='blog_post_date'>{date}</span>
                    </div>
                    <p className='blog_post_excerpt'>{excerpt}</p>
                    <Link to={`/posts/${id}`} className='blog_post_read_more'>
                      Continue reading
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Blog
