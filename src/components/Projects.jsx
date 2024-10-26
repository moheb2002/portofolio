import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import techshop from '../images/te.PNG';
import api from '../images/users-taska-api.PNG';

const projectList = [
  {
    id: 1,
    name: 'TechShop',
    image: techshop,
    link: 'https://techshop-4zq0p2osh-mohebs-projects-b5e39622.vercel.app/',
  },
  {
    id: 2,
    name: 'Users-Tasks-API',
    image: api,
    link: 'https://github.com/moheb2002/users-tasks-api',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10">
      <p className="text-center text-3xl md:text-4xl font-bold mb-8">Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" ref={ref}>
        {projectList.map((project) => (
          <motion.div
            key={project.id}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: project.id * 0.2 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={project.image}
                alt={`${project.name} project`}
                className="w-64 h-64 object-cover rounded-lg shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </a>
            <p className="text-lg font-semibold pt-4">{project.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
