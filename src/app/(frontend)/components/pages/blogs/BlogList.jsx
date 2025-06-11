"use client";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../../../utils/apiUrl";
import BlogCard from "../../BlogCard/BlogCard";
import "./Blog.css";
import BlogListLoading from "../../SkeletonLoading/Blog/BlogListLoading";
import Image from "next/image";
import NotFoundBlog from "./NotFoundBlog";
const BlogList = ({ blogSettings }) => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = blogSettings?.paginationCount || 6;

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(API_URL.GET_ALL_CATEGORIES);
        const data = await res.json();
        setCategories(data.docs || []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch blogs when category or page changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {

        let url = `${API_URL.GET_ALL_BLOGS}?page=${page}&limit=${limit}`;
        if (selectedCategory !== "all") {
          url += `&where[categories][equals]=${selectedCategory}`;
        }

        const res = await fetch(url);
        const data = await res.json();

        setBlogs(data.docs || []);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory, page]);

  const handleCategoryClick = (categoryId) => {
    console.log(categoryId);
    if (selectedCategory !== categoryId) {
      setSelectedCategory(categoryId);
      setPage(1); // Reset page on new category
    }
  };

  const loadMoreBlogs = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const goToPage = (newPage) => {
    if (newPage !== page && newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
      }
    }
    return pages;
  };

  if (loading && blogs.length === 0) return <BlogListLoading />;

  return (
    <div className="container py-5 bg-black text-white min-vh-100 blog-heading">
      {/* Tabs */}
      <div className="blog-tabs mb-4">
        <h2
          className={`mb-4 tab-btn ${selectedCategory === "all" ? "active" : ""}`}
          onClick={() => handleCategoryClick("all")}
        >
          All Blogs
        </h2>
        {categories.map((cat) => (
          
            <h2 className={`mb-4 tab-btn ${selectedCategory === cat.id ? "active" : ""}`}
             key={cat.id}
             onClick={() => handleCategoryClick(cat.id)}
            >
            {cat.name}
            </h2>
          
        ))}
      </div>

      {/* <h2 className="mb-4">
        {selectedCategory === "all"
          ? "All Blogs"
          : categories.find((cat) => cat.id === selectedCategory)?.name || ""}
      </h2> */}

      <div className="blog-row">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        ) : (
          <NotFoundBlog
            title="No Blogs Found"
            message="There are no blog available in this category right now."
            linkHref="/blog"
            linkText="← Back to all blogs"
            showBtn={false}
          />
        )}
      </div>


      {/* View More Button - Only on Mobile */}
      <div className="d-block d-md-none text-center mt-4 mb-4 mt-auto">
        {page < totalPages && (
          <button
            className="btn btn-outline-light btn-sm mt-2 mb-2 more-btn view-more"
            onClick={loadMoreBlogs}
            disabled={loading}
          >
            {loading ? "Loading..." : "View more"}
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
          p === "..." ? (
            <span key={idx} className="mx-2">
              ...
            </span>
          ) : (
            <button
              key={p}
              className={`btn mx-1 ${
                p === page ? "btn-primary" : "btn-outline-secondary"
              }`}
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
