"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen p-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-teal-300 dark:text-teal-200 mb-8">
            About Me
          </h2>
          <section className="flex flex-col md:flex-row items-center bg-gray-900 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src="/profile-pic.jpg"
              alt="Profile Picture"
              className="w-40 h-40 rounded-full object-cover mb-4 md:mb-0 md:mr-8 border-4 border-teal-300 dark:border-teal-200"
            />
            <div className="text-gray-300 dark:text-gray-200">
              <p className="mb-4">
                Hi, I'm Tahira, a MERN Stack Developer passionate about building
                interactive web applications. With experience in front-end and
                back-end development, I enjoy creating seamless and
                user-friendly digital experiences.
              </p>
              <p>
                My skills include JavaScript, React, Node.js, MongoDB, and
                Tailwind CSS. I have worked on various projects, from e-commerce
                websites to personal portfolios.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
