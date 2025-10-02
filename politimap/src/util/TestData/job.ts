
import { faker } from "@faker-js/faker";
import type { Job } from "../../types/job";

export const GenerateJob = (): Job => ({
    title: faker.person.jobTitle(),
    employer: faker.company.name(),
    employerLogo: faker.image.urlPicsumPhotos({ width: 50, height: 50 }),
    startDate: faker.date.past(),
    endDate: faker.date.future(),
    location: `${faker.location.city()}, UK`,
    type: "full-time",
    description: faker.person.jobTitle(),
    tags: Array.from({ length: faker.number.int(4) }, () => faker.person.jobType()),
    isCurrent: false
});