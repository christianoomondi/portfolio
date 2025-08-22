import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // updated import
import '../assets/styles/Contact.scss'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  emailjs.send(
  "service_n2sdhac",
  "template_heqspsv",
  {
    from_name: formData.name,
    reply_to: formData.email,
    message: formData.message
  },
  "gnN0NJkSjmf1thj4e"
)

    .then(() => {
      alert("✅ Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      alert("❌ Failed to send email, try again later.");
      console.error(error.text);
    });
  };

  return (
    <div className="contact_wrapper">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Me</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="body-form"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="body-form"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="body-form"
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
