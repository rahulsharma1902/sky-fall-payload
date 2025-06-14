import React from "react";
import Divider from "../../common/divider/Divider";
import NewLetter from "../home/NewLetter/NewLetter";
import styleMobile from "../home/page.module.css";
import StaticImage from "../../../assets/images/featured-static.png";
import Image from "next/image";
import BlogFeaturedLoading from "../../SkeletonLoading/Blog/BlogFeaturedLoading"
import Link from 'next/link'

const FeaturedBlog = ({
  blogSettings
}) => {
  // Example fallback data if blogSettings is missing
  const featured = blogSettings?.fetureBlog || {
    title: "30 best AI prompts for the operational management",
    description:
      "As software development evolves, CDEs will increasingly be crucial in enabling secure, efficient, and collaborative development practices. Organizations that successfully implement these environments will be better pos...",
    date: "2025-06-02T18:30:00.000Z",
    readTime: "10 min read",
    image: {
      url: "/images/blog/featured-static.png",
      alt: "Featured static image",
    },
    slug: "30-best-ai-prompts-for-the-opertional-management"
  };
  console.log(featured);
  return (
    <section className="featured-blog" style={{ background: '#000', color: '#fff', padding: '32px 0' }}>
      <div className="container" style={{ margin: '0 auto', padding: '0 12px' }}>
         <div className="stars-featured">
         <Image 
           src={"/images/svg/stars.svg"}
            width={5}
            height={5}
            alt={"Arrow Back"}
            layout="responsive"
          />
          <h2>Featured Blog</h2>
          </div>
        <div className="row">
          {/* Left: Image */}
          <div className="col-md-7 featured-blog-image">
          <div className="featured-img">
          <Link href={`/blog/${featured?.slug}`}>
          {/* <Link href={`/blog/30-best-ai-prompts-for-the-opertional-management`}> */}
          <img
              src={featured.image?.url || StaticImage }
              // src={
              //   featured.image?.url
              //     ? `/media/${featured.image.url.split('/').pop()}`
              //     : '/images/static-fallback.png'
              // }              
              alt={featured?.alt || featured?.title}
              style={{ width: '100%', height: '100%',objectFit: 'cover' }}
            />
          </Link>
          </div>
          </div>
          {/* Right: Blog details */}
          <div className="col-md-5">
          <div className="featured-text">
            <div style={{ color: '#aaa', fontSize: 12, marginBottom: 8 }}>
              <p className="featured-date">
                {new Date(featured.publishedDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                })}
                {featured.readTime ? ` • ${featured.readTime} min read` : ''}
              </p>
            </div>
            <h2>
              {featured.title}
            </h2>
            <p style={{ color: '#ccc', fontSize: 15, marginBottom: 20, maxWidth: 420 }}>
              {featured.description}
            </p>
            
            <Link href={`/blog/${featured?.slug}`} className="more-btn">
            {/* <Link href={`/blog/30-best-ai-prompts-for-the-opertional-management`}  className="more-btn"> */}
              Read more 
              <span style={{ fontSize: 18 }}>
                <Image 
                    src={"/images/icon/arrow_back.svg"}
                    width={5}
                    height={5}
                    alt={"Arrow Back"}
                    layout="responsive"
                  />
              </span>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
