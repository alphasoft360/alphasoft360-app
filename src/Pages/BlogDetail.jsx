import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTag, FaClock } from "react-icons/fa";
import blogData from "../Home/blogData";
import "../Home/Blog.css";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="container text-center py-5">
        <h2>Blog Post Not Found</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-detail bg-light">
      {/* ===== Back Link ===== */}
      <section className="container py-4">
        <Link to="/" className="btn blog-back-btn">
          <FaArrowLeft className="me-2" /> Back to Blog
        </Link>
      </section>

      {/* ===== Blog Header ===== */}
      <section className="container blog-header-section p-4 bg-white shadow-sm rounded-3 mb-5">
        <div className="row">
          <div className="col-lg-8">
            <span className="category-badge mb-3">{blog.category}</span>
            <h1 className="fw-bold mb-4">{blog.title}</h1>

            <div className="blog-meta d-flex flex-wrap gap-4 mb-4">
              <div className="meta-item d-flex align-items-center">
                <FaCalendarAlt className="me-2 text-primary" />
                <span>{blog.date}</span>
              </div>
              <div className="meta-item d-flex align-items-center">
                <FaUser className="me-2 text-primary" />
                <span>{blog.author}</span>
              </div>
              <div className="meta-item d-flex align-items-center">
                <FaClock className="me-2 text-primary" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            <p className="lead text-muted mb-4">{blog.excerpt}</p>
          </div>

          <div className="col-lg-4">
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded shadow-sm w-100"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ===== Blog Content ===== */}
      <section className="container pb-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-content bg-white p-4 rounded-3 shadow-sm">
              {blog.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 text-muted"
                  style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="blog-tags mt-4">
              <h5 className="fw-bold mb-3">
                <FaTag className="me-2 text-primary" />
                Tags
              </h5>
              <div className="d-flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="badge bg-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sidebar bg-white p-4 rounded-3 shadow-sm">
              <h5 className="fw-bold mb-3">Article Info</h5>
              <div className="info-item mb-3">
                <strong>Category:</strong> {blog.category}
              </div>
              <div className="info-item mb-3">
                <strong>Published:</strong> {blog.date}
              </div>
              <div className="info-item mb-3">
                <strong>Author:</strong> {blog.author}
              </div>
              <div className="info-item">
                <strong>Read Time:</strong> {blog.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
