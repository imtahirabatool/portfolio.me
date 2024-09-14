"use client";
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="group p-6 rounded-lg bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 shadow-lg hover:scale-105 transition-transform duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold text-teal-400 dark:text-teal-300 mb-2">{project.title}</h3>
      <p className="text-gray-300 dark:text-gray-400">{project.description}</p>
    </motion.div>
  );
};

export default ProjectCard;
