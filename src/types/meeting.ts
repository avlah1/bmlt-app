export type Meeting = {
    id: string;
    name: string;
    day: string;
    time: string;
    duration: string;
    formats: string[];
    modality: string;
    location: {
        venue?: string;
        street?: string;
        city?: string;
        state?: string;
        zip?: string;
        info?: string;
    };
        comments?: string;
        virtual: {
        link?: string;
        info?: string;
    };
}