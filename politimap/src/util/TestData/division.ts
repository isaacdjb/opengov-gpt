
import { faker } from "@faker-js/faker";
import { VoteIntention, type Division } from "../../types/division";

const randomVoterList = () => {
    const length = faker.number.int(300)
    return Array.from({ length }, () => faker.person.fullName());
}

export const GenerateDivision = (): Division => ({
    intention: Object.values(VoteIntention)[Math.floor(Math.random() * 3)],
    vote: {
        date: faker.date.anytime(),
        title: `Division #${faker.number.int(9000)}: ${faker.lorem.words(3)} Bill`.replace(/\b\w/g, c => c.toUpperCase()),
        ayes: randomVoterList(),
        noes: randomVoterList(),
        abstains: randomVoterList(),
    }
});