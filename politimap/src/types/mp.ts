export enum Party {
    CONSERVATIVE = 'conservative',
    LABOUR = 'labour',
    LIBERALDEMOCRAT = 'liberal-democrats',
    SNP = 'snp',
    GREEN = 'green',
    INDEPENDENT = 'independent',
}

export interface Mp {
    name: string;
    title: string;
    party: string;
    constituency: string;
    firstElected: string;
    bio: string;
    location: string;
    website: string;
    education: string;
    stats: {
        votes: number;
        yearsServed: number;
        constituency: string;
    };
    avatar: string;
}