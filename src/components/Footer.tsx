import { navLinks, personal } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">{personal.name}</h2>
            <p className="text-gray-300">{personal.title}</p>
          </div>
          <div className="flex space-x-6">
            {navLinks.slice(0, 5).map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2026 {personal.name}. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href={personal.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-github-line ri-lg" />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-linkedin-line ri-lg" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-twitter-x-line ri-lg" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-instagram-line ri-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
