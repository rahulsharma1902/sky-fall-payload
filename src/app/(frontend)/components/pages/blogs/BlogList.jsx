"use client";
import React, { useEffect, useState } from "react";
import { API_URL } from '../../../../../utils/apiUrl';
import BlogCard from "../../BlogCard/BlogCard";
import "./Blog.css";
import BlogListLoading from "../../SkeletonLoading/Blog/BlogListLoading";
import Image from "next/image";
import Link from 'next/link'

const BlogList = ({ blogSettings }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = blogSettings?.paginationCount || 6;

  // Initial load
  useEffect(() => {
    const getInitialBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL.GET_ALL_BLOGS}?page=1&limit=${limit}`);
        const data = await res.json();
        setBlogs(data.docs);
        setTotalPages(data.totalPages || 1);
        setPage(1);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    getInitialBlogs();
  }, []);

  const loadMoreBlogs = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL.GET_ALL_BLOGS}?page=${nextPage}&limit=${limit}`);
      const data = await res.json();
      setBlogs(prev => [...prev, ...data.docs]);
      setPage(nextPage);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Failed to load more blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const goToPage = async (newPage) => {
    if (newPage === page || newPage < 1 || newPage > totalPages) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL.GET_ALL_BLOGS}?page=${newPage}&limit=${limit}`);
      const data = await res.json();
      setBlogs(data.docs);
      setPage(newPage);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Failed to go to page:", error);
    } finally {
      setLoading(false);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', page - 1, page, page + 1, '...', totalPages);
      }
    }
    return pages;
  };

  if (loading && blogs.length === 0) return <BlogListLoading />;

  return (
    <div className="container py-5 bg-black text-white min-vh-100 blog-heading">
      <h2 className="mb-4">All Blogs</h2>
      <div className="blog-row">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* View More Button - Only on Mobile */}
      <div className="d-block d-md-none text-center mt-4 mb-4 mt-auto ">
        {page < totalPages && (
          <button className="btn btn-outline-light btn-sm mt-2 mb-2 more-btn view-more" onClick={loadMoreBlogs} disabled={loading}>
            {loading ? 'Loading...' : 'View more'}
            <span style={{ fontSize: 18 }}>
                <Image 
                    src={"/images/icon/arrow_back.svg"}
                    width={5}
                    height={5}
                    alt={"Arrow Back"}
                    layout="responsive"
                  />
            </span>
          </button>
        )}
      </div>

      {/* Pagination - Only on Desktop */}
      <div className="d-none d-md-flex justify-content-center align-items-center blog-pagination mt-4">
        <button
          className="btn btn-secondary mx-1"
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
        >
          &lt;
        </button>

        {getPageNumbers().map((p, idx) =>
          p === '...' ? (
            <span key={idx} className="mx-2">...</span>
          ) : (
            <button
              key={p}
              className={`btn mx-1 ${p === page ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => goToPage(p)}
              disabled={p === page}
            >
              {p}
            </button>
          )
        )}

        <button
          className="btn btn-secondary mx-1"
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BlogList;
