"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen p-8">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-teal-300 dark:text-teal-200 mb-8 text-center">
            About Me
          </h2>
          <section className="flex flex-col md:flex-row items-center bg-gray-900 dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="text-gray-300 align-middle dark:text-gray-200 md:ml-6">
              <p className="mb-4">
                Hey there! I&apos;m
                <strong> Tahira Batool</strong>, <br /> <br />a dedicated{" "}
                <strong>MERN Stack Developer</strong> and competitive programmer
                from Pakistan. I excel in crafting dynamic and engaging web
                applications with a keen focus on both front-end and back-end
                development.
              </p>
              <p className="mb-4">
                My expertise spans a range of technologies including{" "}
                <strong>React, Next.js, AI, Tailwind CSS, and Redux</strong>.
                I&apos;m passionate about continuous learning and growth,
                constantly enhancing my skills and staying abreast of the latest
                technological advancements.
              </p>
              <p>
                From building intuitive e-commerce platforms to designing
                personalized portfolios, I am committed to delivering
                exceptional digital experiences. Feel free to explore my work
                and connect with me through the links provided.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
