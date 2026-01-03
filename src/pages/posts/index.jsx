import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTheme } from '../../context/theme'
import { getBlogPostById } from '../../data/blog-data'

const Post = () => {
  const { theme, toggleTheme } = useTheme()
  const { id } = useParams()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)

  const post = getBlogPostById(id)

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!post) {
    return (
      <div className='post_not_found'>
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to='/blog' className='back_to_blog'>
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className='post'>
      <header className={`blog_header ${isScrolled ? 'scrolled' : ''}`}>
        <div className='blog_header_container'>
          <div className='blog_logo'>
            <h3>OO</h3>
          </div>
          <nav className='blog_nav'>
            <button
              onClick={() => navigate(-1)}
              className='blog_nav_link back_button'
            >
              ← Back
            </button>
            <Link to='/blog' className='blog_nav_link'>
              All Posts
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

      <main className='post_main'>
        <article className='post_article'>
          <div className='post_hero_image'>
            <img src={post.image} alt={post.title} />
          </div>

          <div className='post_content_wrapper'>
            <div className='post_header'>
              <div className='post_category'>{post.category}</div>
              <h1 className='post_title'>{post.title}</h1>
              <div className='post_meta'>
                <span className='post_author'>by {post.author}</span>
                <span className='post_separator'>•</span>
                <span className='post_date'>{post.date}</span>
              </div>
            </div>

            <div
              className='post_content'
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className='post_footer'>
              <Link to='/blog' className='back_to_blog_footer'>
                ← Back to all posts
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}

export default Post
