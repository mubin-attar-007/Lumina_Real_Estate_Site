import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '@/types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full aspect-[4/5] overflow-hidden cursor-pointer"
    >
      <Link to={`/projects/${project.id}`} className="block w-full h-full relative">
        {/* Image Container */}
        <div className="absolute inset-0 w-full h-full bg-gray-200">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105 filter grayscale group-hover:grayscale-0"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
        </div>

        {/* Floating Content Layer - Minimal */}
        <div className="absolute bottom-0 left-0 w-full p-8 z-20">
          <div className="translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-[0.22,1,0.36,1]">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-2 block">
              {project.location}
            </span>
            <h3 className="text-3xl font-serif text-white mb-4">
              {project.title}
            </h3>

            {/* Divide line */}
            <div className="h-[1px] w-12 bg-gold-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>

            <div className="flex items-center gap-6 text-xs text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 font-medium">
              <span className="flex items-center gap-2">
                {project.type}
              </span>
              <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
              <span>
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;