// src/pages/Blog.jsx
import { Link } from "react-router-dom";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const blogPosts = [
  {
    id: "post1",
    title: "Mastering React Hooks: A Deep Dive",
    excerpt: "Explore advanced techniques for using React Hooks to build cleaner, more efficient components.",
    date: "June 15, 2025",
    readTime: "5 min read",
    slug: "/blog/mastering-react-hooks",
  },
  {
    id: "post2",
    title: "Tailwind CSS v4: What's New?",
    excerpt: "Discover the latest features in Tailwind CSS v4 and how they enhance your development workflow.",
    date: "June 10, 2025",
    readTime: "4 min read",
    slug: "/blog/tailwind-css-v4",
  },
  {
    id: "post3",
    title: "Building Scalable Node.js APIs",
    excerpt: "Learn best practices for designing and deploying robust APIs with Node.js and Express.",
    date: "June 5, 2025",
    readTime: "6 min read",
    slug: "/blog/scalable-nodejs-apis",
  },
];

const Blog = () => {
  const blogRef = useIntersectionObserver();

  return (
    <section
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      data-animate
      ref={blogRef}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 animate-slide-up">
        Blog
      </h1>
      <p className="text-lg text-muted text-center max-w-lg mx-auto mb-12 animate-fade-in">
        Explore my latest insights on web development, technology trends, and best practices.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            className="card p-6 hover:-translate-y-2 transition-transform duration-300 animate-scale-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-muted text-sm mb-2">{post.excerpt}</p>
            <div className="flex justify-between text-muted text-xs mb-4">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <Link
              to={post.slug}
              className="link font-medium hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 animate-fade-in">
        <Link
          to="/contact"
          className="btn-primary px-8 py-3 text-lg inline-block rounded-full hover:scale-105 transition-transform animate-pulse"
        >
          Suggest a Blog Topic
        </Link>
      </div>
    </section>
  );
};

export default Blog;