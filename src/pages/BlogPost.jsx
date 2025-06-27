import { Link, useParams } from "react-router-dom";
import useScrollAnimations from "../hooks/useScrollAnimations";
import { blogPosts } from "../data/blogPosts";

const BlogPost = () => {
  useScrollAnimations();
  const { slug } = useParams();

  // Find the blog post by slug
  const post = blogPosts.find((post) => post.slug === `/blog/${slug}`);

  // Handle case where post is not found
  if (!post) {
    return (
      <section className="section" data-animate>
        <div className="container">
          <h1 className="font-display text-4xl sm:text-5xl text-center mb-6 animate-fade-in-up">
            Post Not Found
          </h1>
          <p className="text-lg text-muted text-center max-w-lg mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Sorry, the blog post you're looking for doesn't exist.
          </p>
          <div className="text-center" data-animate="fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/blog"
              className="btn btn-primary text-lg px-8 py-4 animate-gentle-bounce"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" data-animate>
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl mb-6 animate-fade-in-up">
            {post.title}
          </h1>
          <div className="flex justify-between text-muted text-sm mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <div className="card p-8 mb-12" data-animate="fade-scale" style={{ animationDelay: "0.4s" }}>
            <p className="text-muted text-lg leading-relaxed">{post.content}</p>
          </div>
          <div className="flex justify-between mb-12" data-animate="fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Link
              to="/blog"
              className="link font-medium"
            >
              ← Back to Blog
            </Link>
            <Link
              to="/contact"
              className="link font-medium"
            >
              Suggest a Topic →
            </Link>
          </div>
        </div>
        <div className="divider my-12"></div>
        <div className="text-center" data-animate="fade-in-up" style={{ animationDelay: "0.8s" }}>
          <Link
            to="/contact"
            className="btn btn-primary text-lg px-8 py-4 animate-gentle-bounce"
          >
            Let’s Collaborate on a Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;