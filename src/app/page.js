import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-teal-300 to-blue-900 dark:from-gray-800 dark:via-gray-900 dark:to-black transition-all duration-500">
        <section className="container mx-auto p-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white animate-fadeInUp">
            Hi, I’m Tahira
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-2xl text-center animate-fadeInUp delay-200">
            I’m a passionate MERN Stack Developer with expertise in creating
            interactive web applications.
          </p>
        </section>

        {/* Styled Buttons */}
        <div className="flex justify-center items-center flex-col space-y-4 mt-8">
          <Link href="/projects" className="btn-primary">
            Projects
          </Link>
          <Link href="/about" className="btn-primary">
            About Us
          </Link>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
