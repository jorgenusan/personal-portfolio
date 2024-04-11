type ProjectData = {
  [key: string]: {
    description: string;
    link: string;
    image: string;
  };
};

const projectsData: ProjectData = {
  'pydepcheck': {
    description: "pre-commit hook that checks the dependencies used in code appear in the environment file",
    link: "https://github.com/jorgenusan/pydepcheck.git",
    image: 'pydeepcheck.jpg',
  },
  'personal-portfolio-website': {
    description: "My portfolio. Personal website",
    link: 'https://github.com/jorgenusan/personal-portfolio-website.git',
    image: 'portfolio.jpg',
  }
};

export default projectsData;