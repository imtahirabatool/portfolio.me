import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectsData";

export default function Projects() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen p-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-teal-300 dark:text-teal-200 mb-8">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
