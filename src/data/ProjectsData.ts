type ProjectData = {
  [key: string]: {
    description: string;
    link: string;
    image: string;
  };
};

const projectsData: ProjectData = {
  'pydepcheck': {
    description: "pre-commit hook that checks the env dependencies used in code appear in the env file",
    link: "https://github.com/jorgenusan/pydepcheck.git",
    image: 'pydeepcheck.jpg',
  },
  'personal-portfolio': {
    description: "My portfolio website, built with React, Tailwind CSS, and Next.js.",
    link: 'https://github.com/jorgenusan/personal-portfolio-website.git',
    image: 'portfolio.jpg',
  }
};

export default projectsData;