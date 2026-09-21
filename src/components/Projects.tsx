import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-secondary mb-12"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={card}
              whileHover={{ y: -6 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('${project.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6">{project.description}</p>
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-button flex items-center transition-colors whitespace-nowrap"
                  >
                    <i className="ri-external-link-line ri-lg mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-secondary hover:bg-secondary/90 text-white py-2 px-4 rounded-button flex items-center transition-colors whitespace-nowrap"
                  >
                    <i className="ri-github-line ri-lg mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
