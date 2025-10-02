import styled from 'styled-components';

export const JobMpHistoryHeader = styled.div`
    padding: 1.5rem 1.5rem 1rem;
    border-bottom: 1px solid #f3f4f6;
`;

export const JobMpHistoryTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
`;

export const JobMpHistorySubtitle = styled.p`
    color: #6b7280;
    font-size: 0.875rem;
`;

export const JobList = styled.div`
    padding: 0;
`;

export const JobItem = styled.div`
    padding: 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    position: relative;
    display: flex;
    gap: 1rem;
    transition: background-color 0.2s;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background: #fafafa;
    }

    &::before {
        content: '';
        position: absolute;
        left: 2.75rem;
        top: 4.5rem;
        bottom: -1px;
        width: 2px;
        background: #e5e7eb;
    }

    &:last-child::before {
        display: none;
    }
`;

export const CompanyLogo = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    background: #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #6b7280;
    font-size: 0.875rem;
    flex-shrink: 0;
    border: 1px solid #e5e7eb;
    position: relative;
    z-index: 1;
`;

export const CompanyLogoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
`;

export const JobContent = styled.div`
    flex: 1;
    min-width: 0;
`;

export const JobHeader = styled.div`
    margin-bottom: 0.75rem;
`;

export const JobTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;
    line-height: 1.4;
`;

export const CompanyName = styled.p`
    color: #6b7280;
    font-weight: 500;
    margin-bottom: 0.25rem;
`;

export const JobMeta = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
    margin-bottom: 0.75rem;
`;

export const JobDates = styled.span`
    color: #9ca3af;
    font-size: 0.875rem;
`;

export const JobDuration = styled.span`
    color: #9ca3af;
    font-size: 0.875rem;
`;

export const JobLocation = styled.span`
    color: #9ca3af;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        width: 0.875rem;
        height: 0.875rem;
    }
`;

export const JobType = styled.span<{ type: 'full-time' | 'contract' | 'freelance' | 'internship' }>`
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 500;

    ${props => props.type === 'full-time' && `
        background: #dcfdf7;
        color: #065f46;
    `}

    ${props => props.type === 'contract' && `
        background: #fef3c7;
        color: #92400e;
    `}

    ${props => props.type === 'freelance' && `
        background: #e0e7ff;
        color: #3730a3;
    `}

    ${props => props.type === 'internship' && `
        background: #fce7f3;
        color: #be185d;
    `}
`;

export const JobDescription = styled.p`
    color: #4b5563;
    line-height: 1.6;
    font-size: 0.875rem;
    margin-bottom: 1rem;
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const Tag = styled.span`
    background: #f3f4f6;
    color: #374151;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid #e5e7eb;
`;

export const CurrentJobIndicator = styled.div`
    position: absolute;
    left: 2.5rem;
    top: 1.75rem;
    width: 0.75rem;
    height: 0.75rem;
    background: #10b981;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #10b981;
    z-index: 2;
`;