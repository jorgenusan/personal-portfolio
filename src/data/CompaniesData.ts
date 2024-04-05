type CompaniesData = {
    [key: string]: {
        time: string;
        title: string;
        description: string;
        location: string;
        image: string;
        website: string;
    };
};

const companiesData: CompaniesData = {
    "Antexia Technologies S.L.": {
        time: "oct. 2023 - Present",
        title: "Machine Learning Engineer",
        description: "Researcher in the field of computer vision, focusing on the development of image algorithms for detection and classification.",
        location: "Vigo, Spain",
        image: "indra.png",
        website: "https://www.indracompany.com/"
    },
    "Gradiant": {
        time: "sept. 2021 - oct. 2023",
        title: "Machine Learning Researcher",
        description: "Researcher in the field of computer vision, focusing on the development of image algorithms for detection, classification and segmentation. As well as the implementation and deployment of the same.<br/> Development of applications and APIs for the management and interaction of the models.<br/> Leadership in best practice methodologies and in the coordination of AI infrastructures for the different projects.",
        location: "Vigo, Spain",
        image: "gradiant.jpg",
        website: "https://www.gradiant.org/"
    },
    "Coremain": {
        time: "apr. 2021 - aug. 2021",
        title: "Full Stack Developer",
        description: "Development of web applications with Angular and Typescript and APIs in .NET for the management of data and the automation of processes.",
        location: "Santiago de Compostela, Spain",
        image: "coremain.png",
        website: "https://www.coremain.com/"
    },
    
    
};

export default companiesData;