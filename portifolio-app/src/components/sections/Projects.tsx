import { Section } from "../layout/Section";
import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from "lucide-react";
import type { Project as ProjectType } from "../../types/project";

interface ProjectsProps {
  projects: ProjectType[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section id="projetos" title="Projetos em Destaque">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
            <div className="flex space-x-4 mt-auto pt-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"><FaGithub size={16} className="mr-1" />GitHub</a>
              {project.demo && (<a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"><ExternalLink size={16} className="mr-1" />Ver Online</a>)}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}