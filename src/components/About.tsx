import { motion } from 'framer-motion';
import { about, personal } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-secondary mb-12"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div
              className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg"
              style={{
                backgroundImage: `url('${personal.aboutImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="w-full md:w-2/3"
          >
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
              {about.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-lg text-gray-700 leading-relaxed ${i > 0 ? 'mt-4' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
