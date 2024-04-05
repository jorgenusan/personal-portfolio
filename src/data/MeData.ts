type MeData = {
    [key: string]: {
        name: string;
        jobTitle: string;
        company: string;
        image: string;
    };
};

const meData: MeData = {
    "Jorge": {
        name: "Jorge Núñez Santiago",
        jobTitle: "Machine Learning Developer",
        company: "Antexia Technologies S.L.",
        image: "me.jpg"
    }
};

export default meData;