"use client";
const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center bg-gradient-to-r from-[#001a33] to-[#0ef] shadow-lg dark:bg-gray-900">
      <h1 className="text-white font-extrabold text-3xl transition-transform duration-300 transform hover:scale-110">
        My Portfolio
      </h1>
      <nav>
        <div className="flex space-x-6 mt-2">
          <a
            href="https://github.com/imtahirabatool"
            className="text-white text-lg padd hover:text-yellow-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/imtahirabatool"
            className="text-white text-lg padd hover:text-yellow-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
