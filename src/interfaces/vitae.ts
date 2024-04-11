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

export type { VitaeData };