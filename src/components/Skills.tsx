import { motion } from 'framer-motion';
import { proficiencyLevels, skillGroups } from '../data/portfolio';

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-secondary mb-12"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={card}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center text-primary bg-primary/10 rounded-full mr-4">
                  <i className={`${group.icon} ri-xl`} />
                </div>
                <h3 className="text-xl font-semibold text-secondary">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Level Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-secondary mb-6">Proficiency Levels</h3>
          <div className="space-y-6">
            {proficiencyLevels.map((level) => (
              <div key={level.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">{level.label}</span>
                  <span className="text-primary font-medium">{level.percent}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-primary h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level.percent}%` }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
