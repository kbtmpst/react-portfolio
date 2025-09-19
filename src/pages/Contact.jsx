import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

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
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Oops! Something went wrong. Please try again later.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-start justify-center py-20"
    >
      <div className="px-4 w-full max-w-lg">
        <h2 className="text-3xl font-bold mt-8 mb-8 text-center">
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
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5"
              placeholder="Name"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5"
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
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-purple-500/75 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,180,180,1)] group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
