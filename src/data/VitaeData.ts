type VitaeData = {
    [key: string]: {
        start_date: MonthYear;
        end_date: MonthYear;
        title: string;
        description: string;
        location: string;
        image: string;
        website: string;
    };
};

interface MonthYear {
    month: string;
    year: number | string;
}

const vitaeData: VitaeData = {
    "Antexia Technologies S.L.": {
        start_date: { month: "oct.", year: 2023 },
        end_date: { month: "Present", year: "" },
        title: "Machine Learning Engineer",
        description: "Researcher in the field of computer vision, focusing on the development of image algorithms for detection and classification.",
        location: "Vigo, Spain",
        image: "indra.png",
        website: "https://www.indracompany.com/"
    },
    "Gradiant": {
        start_date: { month: "sept.", year: 2021 },
        end_date: { month: "oct.", year: 2023 },
        title: "Machine Learning Researcher",
        description: "Researcher in the field of computer vision, focusing on the development of image algorithms for detection, classification and segmentation. As well as the implementation and deployment of the same.<br/> Development of applications and APIs for the management and interaction of the models.<br/> Leadership in best practice methodologies and in the coordination of AI infrastructures for the different projects.",
        location: "Vigo, Spain",
        image: "gradiant.jpg",
        website: "https://www.gradiant.org/"
    },
    "Coremain": {
        start_date: { month: "apr.", year: 2021 },
        end_date: { month: "aug.", year: 2021 },
        title: "Full Stack Developer",
        description: "Development of web applications with Angular and Typescript and APIs in .NET for the management of data and the automation of processes.",
        location: "Santiago de Compostela, Spain",
        image: "coremain.png",
        website: "https://www.coremain.com/"
    },
    "IES de Teis": {
        start_date: { month: "", year: 2021 },
        end_date: { month: "", year: 2022 },
        title: "Specialisation course in Artificial Intelligence and Big Data",
        description: "Specialisation course in Artificial Intelligence and Big Data, with a focus on machine learning and deep learning.",
        location: "IES de Teis, Vigo, Spain",
        image: "teis.jpeg",
        website: "https://www.edu.xunta.gal/centros/iesteis/"
    },
    "IES Leliadoura": {
        start_date: { month: "", year: 2019 },
        end_date: { month: "", year: 2021 },
        title: "Multiplatform Application Development",
        description: "Multiplatform application development FP title, with a focus on backend applications.",
        location: "IES Leliadoura, Ribeira, Spain",
        image: "leliadoura.jpg",
        website: "https://www.edu.xunta.gal/centros/ieleliadoura/"
    },
    "University of Valladolid": {
        start_date: { month: "", year: 2014 },
        end_date: { month: "", year: 2018 },
        title: "Degree in Physics",
        description: "Unfinished. I studied the first three years of the degree in Physics, with a focus on theoretical physics.",
        location: "University of Valladolid, Valladolid, Spain",
        image: "uva.jpg",
        website: "https://www.uva.es/"
    },
};

export default vitaeData;