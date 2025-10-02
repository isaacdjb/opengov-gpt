export interface Job {
    title: string;
    employer: string;
    employerLogo?: string;
    startDate: Date;
    endDate?: Date;
    location: string;
    type: 'full-time' | 'contract' | 'freelance' | 'internship';
    description: string;
    tags: string[];
    isCurrent?: boolean;
}