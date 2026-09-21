import { motion } from 'framer-motion';
import { personal } from '../data/portfolio';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const contactRows = [
  { icon: 'ri-mail-line', href: `mailto:${personal.email}`, label: personal.email },
  { icon: 'ri-phone-line', href: `tel:${personal.phoneHref}`, label: personal.phone },
  { icon: 'ri-github-line', href: personal.github, label: personal.github.replace('https://', '') },
  { icon: 'ri-linkedin-line', href: personal.linkedin, label: personal.linkedin.replace('https://', '') },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 md:pt-0 min-h-screen flex items-center relative"
      style={{
        backgroundImage: `url('${personal.heroImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <div className="max-w-3xl">
          <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold text-secondary mb-4">
            {personal.name}
          </motion.h1>
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-medium text-primary mb-8">
            {personal.title}
          </motion.h2>

          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {contactRows.map((row) => (
              <div key={row.label} className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center text-primary bg-primary/10 rounded-full mr-3">
                  <i className={`${row.icon} ri-lg`} />
                </div>
                <a
                  href={row.href}
                  target={row.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  {row.label}
                </a>
              </div>
            ))}
          </motion.div>

          <motion.a
            variants={item}
            href={personal.resumeFile}
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-button items-center transition-colors whitespace-nowrap"
          >
            <i className="ri-download-line ri-lg mr-2" />
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
