import { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS

emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
});

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send function
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input w-full"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input w-full"
          placeholder="you@example.com"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="input w-full"
          placeholder="Your message..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full py-3 text-lg animate-gentle-bounce"
      >
        Send Message
      </button>
      {status && (
        <p
          className={`mt-4 text-center ${
            status.includes("Failed")
              ? "text-red-500"
              : "text-[var(--color-lightPrimary)] dark:text-[var(--color-darkPrimary)]"
          } animate-fade-in`}
        >
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;