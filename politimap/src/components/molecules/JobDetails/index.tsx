import { MapPin } from 'lucide-react';
import * as S from './stytle';
import type { Job } from '../../../types/job';


interface JobDetailsProps {
    job: Job;
}

const JobDetails = ({ job }: JobDetailsProps) => {
    const calculateDuration = (start: Date, end?: Date): string => {
        end = end ?? new Date();
        const months = (end.getFullYear() - start.getFullYear()) * 12 +
            (end.getMonth() - start.getMonth());

        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;

        if (years === 0) {
            return `${months} mo${months !== 1 ? 's' : ''}`;
        } else if (remainingMonths === 0) {
            return `${years} yr${years !== 1 ? 's' : ''}`;
        } else {
            return `${years} yr${years !== 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths !== 1 ? 's' : ''}`;
        }
    };

    return (
        <S.JobItem>
            {job.isCurrent && <S.CurrentJobIndicator />}

            <S.CompanyLogo>
                {job.employerLogo ? (
                    <S.CompanyLogoImage src={job.employerLogo} alt={`${job.employer} logo`} />
                ) : 'Na'}
            </S.CompanyLogo>

            <S.JobContent>
                <S.JobHeader>
                    <S.JobTitle>{job.title}</S.JobTitle>
                    <S.CompanyName>{job.employer}</S.CompanyName>
                </S.JobHeader>

                <S.JobMeta>
                    <S.JobDates>
                        {job.startDate.toDateString()} - {job.endDate?.toDateString() ?? 'Present'}
                    </S.JobDates>
                    <S.JobDuration>
                        · {calculateDuration(job.startDate, job.endDate)}
                    </S.JobDuration>
                    <S.JobLocation>
                        <MapPin />
                        {job.location}
                    </S.JobLocation>
                    <S.JobType type={job.type}>
                        {job.type}
                    </S.JobType>
                </S.JobMeta>

                <S.JobDescription>
                    {job.description}
                </S.JobDescription>

                <S.TagsContainer>
                    {job.tags.map((tag, index) => (
                        <S.Tag key={index}>{tag}</S.Tag>
                    ))}
                </S.TagsContainer>
            </S.JobContent>
        </S.JobItem>
    );
};

export default JobDetails;