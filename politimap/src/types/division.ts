export interface Division {
    vote: Vote,
    intention: VoteIntention
}

export interface Vote {
    title: string,
    date: Date,
    ayes: string[]
    noes: string[]
    abstains: string[]
}

export enum VoteIntention {
    YES = 'Yes',
    NO = 'No',
    ABSTAIN = 'Abstain'
}
