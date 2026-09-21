import { motion } from 'framer-motion';
import { personal } from '../data/portfolio';

const socialLinks = [
  { icon: 'ri-github-line', href: personal.github },
  { icon: 'ri-linkedin-line', href: personal.linkedin },
  { icon: 'ri-twitter-x-line', href: '#' },
  { icon: 'ri-instagram-line', href: '#' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-secondary mb-12"
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full md:w-1/2"
          >
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-semibold text-secondary mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center text-primary bg-primary/10 rounded-full mr-4 mt-1">
                    <i className="ri-mail-line ri-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Email</h4>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center text-primary bg-primary/10 rounded-full mr-4 mt-1">
                    <i className="ri-phone-line ri-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Phone</h4>
                    <a
                      href={`tel:${personal.phoneHref}`}
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center text-primary bg-primary/10 rounded-full mr-4 mt-1">
                    <i className="ri-map-pin-line ri-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Location</h4>
                    <p className="text-gray-700">{personal.location}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-medium text-secondary mb-3">Social Profiles</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -3, scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary bg-gray-100 hover:bg-primary/10 rounded-full transition-colors"
                      >
                        <i className={`${social.icon} ri-lg`} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="w-full md:w-1/2"
          >
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-semibold text-secondary mb-6">Send a WhatsApp Message</h3>
              <p className="text-gray-700 mb-6">Tap the button below to chat with me directly on WhatsApp.</p>
              <motion.a
                href={personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                animate={{ boxShadow: ['0 0 0 0 rgba(22,163,74,0.4)', '0 0 0 12px rgba(22,163,74,0)'] }}
                transition={{ boxShadow: { duration: 1.8, repeat: Infinity, ease: 'easeOut' } }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-button flex items-center justify-center transition-colors whitespace-nowrap"
              >
                <i className="ri-whatsapp-line ri-lg mr-2" />
                Message Me on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
