import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-secondary mb-12"
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2"
          />

          <div className="space-y-12">
            {experience.map((job, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={job.company} className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="hidden md:block absolute w-4 h-4 bg-primary rounded-full z-10 top-6"
                    style={{ left: 'calc(50% - 8px)' }}
                  />
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`md:w-5/12 bg-white p-6 rounded-lg shadow-sm border border-gray-100 ml-8 md:ml-0 ${
                      isEven ? 'md:ml-auto' : ''
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4">
                        <i className={`${job.icon} ri-xl text-primary`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-secondary">{job.role}</h3>
                        <p className="text-primary">{job.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 mb-3">{job.period}</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
