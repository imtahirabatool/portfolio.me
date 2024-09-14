"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      // Replace with your API endpoint or email service provider
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Header />
      <main className="container flex justify-center items-center mx-auto p-8 bg-gradient-to-br from-teal-900 to-blue-900">
        <div className="w-full max-w-lg bg-gray-800 dark:bg-gray-900 p-8 rounded-lg shadow-lg relative overflow-hidden">
          <h2 className="text-4xl font-bold text-teal-100 dark:text-teal-300 mb-8 text-center">
            Contact Me
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6"
          >
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-teal-100 dark:text-teal-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md border-teal-500 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-teal-100 dark:text-teal-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md border-teal-500 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="message"
                className="block text-teal-100 dark:text-teal-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border rounded-md border-teal-500 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {isSubmitted && (
              <p className="mt-4 text-teal-300 text-center">Thank you for your message!</p>
            )}
          </form>
          <svg
            className="absolute -bottom-10 -right-10 w-64 h-64 text-teal-300 dark:text-teal-500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <circle cx="100" cy="100" r="100" opacity="0.5" stroke="currentColor" strokeWidth="40"></circle>
          </svg>
        </div>
      </main>
      <Footer />
    </>
  );
}
