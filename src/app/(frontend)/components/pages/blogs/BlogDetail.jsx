"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { API_URL } from '../../../../../utils/apiUrl';
import { LexicalRenderer } from "../../LexicalRenderer";
import  BlogDetailsLoading  from "../../SkeletonLoading/Blog/BlogDetailLoading";
import Link from "next/link";
import "./Blog.css"
import Image from "next/image";


const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await fetch(`${API_URL.GET_ALL_BLOGS}?where[slug][equals]=${slug}&depth=2`);
        const data = await res.json();
        if (data.docs && data.docs.length > 0) {
          setBlog(data.docs[0]);
          console.log(data.docs[0])
          
          
        } else {
          setBlog(null); 
        }
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      getBlog();
    }
  }, [slug]);
  if (loading) return (
    <BlogDetailsLoading />
  );
  if (!blog) return <p className="text-red-400 p-4">Blog not found.</p>;

  return (
  <section className="blogdetails-section">
      <div className="container py-5 bg-black text-white min-h-screen">
    <p className="text-sm text-gray-400">
      <Link href="/blog" className="all-blog">
        All Blogs  &gt;
      </Link>{" "}
      <span className="text-white">{blog?.title}</span>
    </p>
        <h2>{blog?.title}</h2>
        <p className="text-sm text-gray-400 mb-2 text-muted-detail">
            {new Date(blog?.publishedDate).toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
            })}
            {blog.readTime ? ` • ${blog.readTime} min read` : ''}
        </p>
        <div className="details-images">
        {/* <img
          // src={blog?.image?.url}
          src={`/media/${blog.image.url.split('/').pop()}`}
          className="card-img-top"
          alt={blog?.image?.alt || blog?.title}
          loading="lazy"
        /> */}
        <picture>
          <source media="(min-width: 1024px)" srcSet={blog.image?.sizes?.desktop?.url} />
          <source media="(min-width: 640px)" srcSet={blog.image?.sizes?.tablet?.url} />
          <img
            src={blog.image?.sizes?.desktop?.url || blog.image?.url}
            alt={blog.image?.alt || 'Blog image'}
            loading="lazy"
            style={{ width: "100%"}}
          />
        </picture>

        </div>
        {/* <h1 className="text-3xl font-bold mb-4">{blog?.title}</h1>
        <p className="text-sm text-mute font-bold mb-4">{blog?.description}</p> */}

      
       <LexicalRenderer content={blog?.content} />

       <div className="author-details">
          <h6>THE AUTHOR</h6>
          <div className="author-flex">
          <div className="image-author">
            <img
                  src={blog?.author?.profileImage?.url || '/images/svg/download.jpeg'}
                  alt={blog?.author?.alt || 'Author'}
                  layout="responsive"
                />
          </div>
          <div className="author-content">
              <h6>{blog?.author?.name || '' }</h6>
              <p>{blog?.author?.position || '' } </p>
          </div>
          </div>
       </div>
    </div>
  </section>
  );
};

export default BlogDetail;
