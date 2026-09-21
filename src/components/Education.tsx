import { motion } from 'framer-motion';
import { certifications, education } from '../data/portfolio';

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-secondary mb-12"
        >
          Education
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100"
          >
            <div
              className="h-48 bg-primary/10 flex items-center justify-center"
              style={{
                backgroundImage: `url('${education.bannerImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="bg-white/90 px-6 py-4 rounded-lg">
                <img src={education.logoImage} alt={education.school} className="h-16 mx-auto" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-secondary mb-2">{education.school}</h3>
              <p className="text-lg text-primary mb-4">{education.degree}</p>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center text-primary bg-primary/10 rounded-full mr-3">
                    <i className="ri-calendar-line ri-lg" />
                  </div>
                  <span className="text-gray-700">{education.period}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center text-primary bg-primary/10 rounded-full mr-3">
                    <i className="ri-medal-line ri-lg" />
                  </div>
                  <span className="text-gray-700">{education.gpa}</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <h4 className="font-semibold text-secondary mb-3">Key Achievements</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {education.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Additional Certifications */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-secondary mb-6">Professional Certifications</h3>
            <motion.div
              variants={grid}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={card}
                  whileHover={{ x: 4 }}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center text-primary bg-primary/10 rounded-full mr-3">
                      <i className="ri-award-line ri-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary">{cert.title}</h4>
                      <p className="text-gray-700 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
