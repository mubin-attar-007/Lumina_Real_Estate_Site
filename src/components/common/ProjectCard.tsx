import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Maximize, Bed } from 'lucide-react';
import { Project } from '@/types';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // 3D Tilt Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group relative w-full aspect-[4/5] perspective-1000 cursor-pointer"
    >
      <Link to={`/projects/${project.id}`} className="block w-full h-full relative preserve-3d">
        {/* Image Container with Parallax Depth */}
        <div
          className="absolute inset-0 w-full h-full rounded-sm overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(197,160,89,0.2)]"
          style={{ transform: "translateZ(0px)" }}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
        </div>

        {/* Floating Content Layer */}
        <div
          className="absolute bottom-0 left-0 w-full p-8 z-20"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="bg-white/95 backdrop-blur-md p-6 border-l-4 border-gold-500 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-600 mb-1 flex items-center gap-1">
                  <MapPin size={10} /> {project.location}
                </span>
                <h3 className="text-xl font-serif font-bold text-brand-900 group-hover:text-gold-600 transition-colors">
                  {project.title}
                </h3>
              </div>
              <span className="w-8 h-8 flex items-center justify-center bg-brand-900 text-gold-500 rounded-full group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                <ArrowUpRight size={16} />
              </span>
            </div>

            <div className="h-[1px] w-full bg-gray-100 my-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            <div className="flex justify-between items-center text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span className="flex items-center gap-1"><Bed size={12} /> {project.type}</span>
              <span className="flex items-center gap-1"><Maximize size={12} /> {project.price}</span>
            </div>
            {project.reraId && (
              <div className="mt-3 pt-3 border-t border-gray-100 text-[10px] text-gray-400 font-mono text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                MahaRERA: {project.reraId}
              </div>
            )}
          </div>
        </div>

        {/* Status Badge */}
        <div
          className="absolute top-6 right-6 z-20"
          style={{ transform: "translateZ(30px)" }}
        >
          <span className="px-3 py-1 bg-brand-900 text-gold-500 text-[10px] font-bold uppercase tracking-wider shadow-xl border border-gold-500/20">
            {project.status}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;