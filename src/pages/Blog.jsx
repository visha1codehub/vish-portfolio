import { Link } from "react-router-dom";
import useScrollAnimations from "../hooks/useScrollAnimations";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  useScrollAnimations();

  return (
    <section className="section" data-animate>
      <div className="container">
        <h1 className="font-display text-4xl sm:text-5xl text-center mb-6 animate-fade-in-up">
          Blog
        </h1>
        <p className="text-lg text-muted text-center max-w-lg mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Explore my insights on web development, showcasing projects like ShellSpace, VishChat, and more, with a focus on ReactJS, Django, and API integration.
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