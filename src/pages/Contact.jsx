import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! Something went wrong. Please try again later.")
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-centr justify-center py-20"
    >
      <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mt-8 mb-8 bg-gradient-to-r from-cyan-600 to-green-400 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 test-while transition focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5"
              placeholder="Name"
              o
            />
          </div>

          <div className="relative">
            <input
              type="emial"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 test-while transition focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              required
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 test-while transition focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
