'use client'

import Link from 'next/link'
import React from 'react'
import Image from "next/image";

const NotFoundBlog = ({
  showBtn = true,
  title = 'Blog Not Found',
  message,
  linkHref = '/blog',
  linkText = '← Go back to all blog posts',
}) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{title}</h1>
      <p style={styles.message}>
        {message || "Sorry, the blog post you're looking for doesn't exist or has been removed."}
      </p>
      {showBtn && (
        <div className="mt-auto more-btn">
          <div className='featured-text'>
            <Link href={linkHref} className="more-btn">
              <span style={{ fontSize: 18 }}>
                {/* <Image 
                    src={"/images/icon/back-arrow.svg"}
                    width={5}
                    height={5}
                    alt={"Arrow Back"}
                    layout="responsive"
                  /> */}
              </span>
              {linkText}

            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '60px 20px',
    maxWidth: '600px',
    margin: '0 auto',

  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '30px',
  },
  link: {
    fontSize: '1rem',
    color: '#0070f3',
    textDecoration: 'none',
  },
}

export default NotFoundBlog
