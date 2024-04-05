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
    image: '/github.jpg',
  },
  'personal-website': {
    description: "Personal website",
    link: '...',
    image: '/github.jpg',
  },
};

export default projectsData;