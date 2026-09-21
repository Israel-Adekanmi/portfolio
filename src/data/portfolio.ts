export const personal = {
  name: 'Israel Adekanmi',
  title: 'Full Stack Developer',
  email: 'adekanmiisrael8@gmail.com',
  phone: '+234 8029737682',
  phoneHref: '+2348029737682',
  whatsapp: 'https://wa.me/2348029737682',
  location: 'Lagos, Nigeria',
  github: 'https://github.com/Israel-Adekanmi',
  linkedin: 'https://linkedin.com/in/adekanmi-israel-49b4b1329',
  heroImage:
    "https://readdy.ai/api/search-image?query=modern%20minimalist%20tech%20background%20with%20soft%20blue%20gradient%2C%20abstract%20geometric%20shapes%2C%20clean%20and%20professional%20atmosphere%2C%20perfect%20for%20developer%20portfolio%2C%20high%20quality%20digital%20art&width=1920&height=1080&seq=hero1&orientation=landscape",
  aboutImage:
    'https://res.cloudinary.com/craftshop/image/upload/v1751184832/20241220_173254_d2yzkv.jpg',
  resumeFile: '/Israel_Adekanmi_Resume.pdf',
};

export const about = [
  'I am a highly motivated Full Stack Developer with hands-on experience in building scalable and efficient web applications. Proficient in modern languages and tools including Python, JavaScript, TypeScript, and various frameworks like React.js, Node.js, NestJS and Next.js.',
  'My technical expertise spans across frontend and backend development, database management, and cloud services. I excel in creating responsive, user-friendly interfaces while ensuring robust backend systems.',
  'Strong in teamwork, problem-solving, and leadership, I thrive in collaborative environments and am passionate about delivering high-quality solutions that meet business objectives.',
];

export type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: 'ri-code-s-slash-line',
    skills: ['Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks',
    icon: 'ri-layout-grid-line',
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'Next.js',
      'NestJs',
      'ShadCN',
      'Redux',
      'Jest',
      'Cypress',
      'TailwindCSS',
    ],
  },
  {
    title: 'Tools',
    icon: 'ri-tools-line',
    skills: ['Git', 'Docker', 'TravisCI', 'VS Code', 'PyCharm', 'Visual Studio', 'Kubernetes', 'Jira'],
  },
  {
    title: 'Databases',
    icon: 'ri-database-2-line',
    skills: ['Redis', 'MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'Cloud',
    icon: 'ri-cloud-line',
    skills: ['AWS', 'Azure'],
  },
  {
    title: 'Others',
    icon: 'ri-more-line',
    skills: ['REST APIs', 'GraphQL', 'Figma', 'Accessibility', 'UI/UX', 'SEO'],
  },
];

export const proficiencyLevels = [
  { label: 'Frontend Development', percent: 90 },
  { label: 'Backend Development', percent: 85 },
  { label: 'Database Management', percent: 80 },
  { label: 'DevOps & Cloud', percent: 75 },
];

export type Project = {
  title: string;
  image: string;
  tags: string[];
  description: string;
  demoUrl: string;
  sourceUrl: string;
};

export const projects: Project[] = [
  {
    title: 'Unilag Campus Explorer',
    image:
      "https://readdy.ai/api/search-image?query=university%20campus%20map%20application%20interface%20with%20navigation%20paths%20highlighted%2C%20modern%20UI%20design%2C%20clean%20layout%20with%20blue%20accents%2C%20digital%20map%20visualization%2C%20professional%20software%20interface&width=800&height=500&seq=project1&orientation=landscape",
    tags: ['React', 'TypeScript', 'TailwindCSS', "Dijkstra's Algorithm"],
    description:
      'An interactive campus map application that helps students and visitors navigate the University of Lagos campus efficiently.',
    demoUrl: 'https://unilag-campus-explorer.vercel.app',
    sourceUrl: '#',
  },
  {
    title: 'Movie Watchlist',
    image:
      "https://readdy.ai/api/search-image?query=movie%20watchlist%20application%20interface%20with%20film%20posters%20arranged%20in%20a%20grid%2C%20search%20functionality%2C%20genre%20filtering%20options%2C%20modern%20dark%20UI%20with%20blue%20accents%2C%20professional%20software%20interface&width=800&height=500&seq=project2&orientation=landscape",
    tags: ['React', 'TypeScript', 'NestJS', 'MongoDB'],
    description:
      'A full-stack application that allows users to create personalized movie watchlists.',
    demoUrl: 'https://izzy-watch-movie-16.onrender.com',
    sourceUrl: '#',
  },
  {
    title: 'ShipShield',
    image:
      'https://res.cloudinary.com/craftshop/image/upload/v1777553683/Screenshot_20260430_135207_Chrome_vvb1y4.jpg',
    tags: ['Node.js', 'Express', 'GitHub API', 'Firebase'],
    description:
      'A team-based project focused on analyzing GitHub repositories for production readiness. I worked on the backend, building APIs, implementing repository analysis logic, and automating pull request generation.',
    demoUrl: 'https://shipshield-othb.vercel.app/',
    sourceUrl: 'https://github.com/nife-codes/shipshield',
  },
  {
    title: 'VirtuCare',
    image:
      'https://res.cloudinary.com/craftshop/image/upload/v1777117343/Screenshot_2026-04-25_123652_k3ikyt.png',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Java soon'],
    description:
      'A healthcare web application that allows users to book and manage medical appointments seamlessly. Built with a focus on clean UI, user experience, and real-world product structure.',
    demoUrl: 'https://virtucare-three.vercel.app/',
    sourceUrl: 'https://github.com/Israel-Adekanmi/virtucare',
  },
  {
    title: 'TaskFlow',
    image:
      'https://res.cloudinary.com/craftshop/image/upload/v1789722234/Screenshot_2026-09-18_100254_l1rz6u.png',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'NestJS', 'MongoDB', 'JWT'],
    description:
      'A full-stack task management application with user authentication, task creation and editing, status tracking, overdue task detection, and a responsive dashboard. Built with a NestJS REST API and MongoDB backend.',
    demoUrl: 'https://taskflowfrontend-ten.vercel.app/',
    sourceUrl: 'https://github.com/Israel-Adekanmi/taskflow',
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  icon: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Backend Developer',
    company: 'BJTM Technologies',
    period: 'Nov 2024 – June 2025',
    icon: 'ri-building-line',
    points: [
      'Developing and maintaining RESTful APIs using Node.js and Express',
      'Implementing database solutions with MongoDB and PostgreSQL',
      'Collaborating with frontend developers to integrate API endpoints',
      'Optimizing application performance and ensuring security best practices',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Nithub',
    period: 'Apr 2024 – Nov 2024',
    icon: 'ri-code-box-line',
    points: [
      'Assisted in developing web applications using React.js and Next.js',
      'Implemented responsive UI components following design specifications',
      'Participated in code reviews and agile development processes',
      'Collaborated with senior developers on feature implementation',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'TradeLenda',
    period: 'Aug 2023 – Nov 2023',
    icon: 'ri-terminal-box-line',
    points: [
      'Developed frontend components using React and TailwindCSS',
      'Implemented API integrations for financial data services',
      'Fixed bugs and improved application performance',
      'Participated in daily stand-ups and sprint planning',
    ],
  },
  {
    role: 'Intern',
    company: 'Stanbic IBTC',
    period: 'Oct 2022 – Nov 2022',
    icon: 'ri-bank-line',
    points: [
      'Assisted in IT operations and support tasks',
      'Gained exposure to financial software systems',
      'Participated in documentation and process improvement',
      'Collaborated with IT team on system maintenance',
    ],
  },
];

export const education = {
  school: 'University of Lagos',
  degree: 'B.Sc. Mechanical Engineering',
  period: '2021 - 2027',
  gpa: 'CGPA: 4.83/5.0',
  bannerImage:
    "https://readdy.ai/api/search-image?query=university%20of%20lagos%20campus%20aerial%20view%2C%20beautiful%20academic%20buildings%2C%20modern%20university%20architecture%2C%20professional%20photograph%20with%20blue%20sky&width=1000&height=400&seq=education1&orientation=landscape",
  logoImage:
    'https://readdy.ai/api/search-image?query=university%20of%20lagos%20logo%2C%20simple%20emblem%2C%20educational%20institution%20symbol%2C%20professional%20design&width=120&height=120&seq=logo1&orientation=squarish',
  achievements: [
    'Currently on First Class',
    'Member of the Engineering Students Association',
    'Completed capstone project on renewable energy systems',
  ],
};

export const certifications = [
  { title: 'AWS Certified Developer', issuer: 'Amazon Web Services, 2024' },
  { title: 'React Developer Certification', issuer: 'Meta, 2023' },
  { title: 'MongoDB Database Administrator', issuer: 'MongoDB University, 2023' },
  { title: 'Full Stack Web Development', issuer: 'Udacity, 2022' },
];

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
];
