import { Link } from "react-router-dom";
import useScrollAnimations from "../hooks/useScrollAnimations";

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
  {
    id: "post4",
    title: "Building Robust APIs with Django REST Framework",
    excerpt:
      "Dive into creating scalable, secure, and maintainable REST APIs using Django REST Framework, with tips on authentication and optimization.",
    date: "May 30, 2025",
    readTime: "7 min read",
    slug: "/blog/django-rest-framework-apis",
  },
  {
    id: "post5",
    title: "Django for Rapid Web Development",
    excerpt:
      "Explore how Django’s ORM, admin panel, and ecosystem enable rapid development of secure, full-stack web applications.",
    date: "May 25, 2025",
    readTime: "5 min read",
    slug: "/blog/django-rapid-web-development",
  },
];

const Blog = () => {
  useScrollAnimations();

  return (
    <section className="section" data-animate>
      <div className="container">
        <h1 className="font-display text-4xl sm:text-5xl text-center mb-6 animate-fade-in-up">
          Blog
        </h1>
        <p className="text-lg text-muted text-center max-w-lg mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Explore my latest insights on web development, technology trends, and best practices, including my expertise in Django and API development.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="card"
              data-animate="fade-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                <h2 className="font-display text-xl mb-4">{post.title}</h2>
                <p className="text-muted text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex justify-between text-muted text-xs mb-6">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  to={post.slug}
                  className="link font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="divider my-12"></div>
        <div className="text-center" data-animate="fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Link
            to="/contact"
            className="btn btn-primary text-lg px-8 py-4 animate-gentle-bounce"
          >
            Suggest a Blog Topic
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;