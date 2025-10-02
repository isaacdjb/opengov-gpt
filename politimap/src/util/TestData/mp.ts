
import { faker } from '@faker-js/faker'
import { Party, type Mp } from '../../types/mp'

export const GenerateMp = (): Mp => {
    const person = faker.person.fullName()
    const place = faker.location.county();
    return (
        {
            name: person,
            title: `Member of Parliament for ${place}`,
            party: Object.values(Party)[faker.number.int(5)],
            constituency: place,
            firstElected: "2019",
            bio: `Passionate about social justice, education reform, and economic opportunity. Working every day to represent the voices of ${place} in Parliament.`,
            location: `${place} UK`,
            website: `${person.toLowerCase().replace(" ", "-")}.gov.uk`,
            education: `${faker.location.city()} Universifty (PPE)`,
            stats: {
                votes: faker.number.int(200),
                yearsServed: faker.number.int(20),
                constituency: place
            },
            avatar: faker.image.avatar()
        })
}