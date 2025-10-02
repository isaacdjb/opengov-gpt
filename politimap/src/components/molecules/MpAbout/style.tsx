import styled from 'styled-components';

export const PageContainer = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
`;

export const Header = styled.header`
    background: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #e5e7eb;
`;

export const HeaderContent = styled.div`
    max-width: 80rem;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #1e40af 0%, #7c2d12 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

export const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const IconButton = styled.button`
    padding: 0.5rem;
    border-radius: 50%;
    background: #f3f4f6;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background: #e5e7eb;
    }

    svg {
        width: 1.25rem;
        height: 1.25rem;
        color: #6b7280;
    }
`;

export const MainLayout = styled.div`
    max-width: 80rem;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
    }
`;

// About Section Styles
export const AboutCard = styled.div`
    background: white;
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: sticky;
`;

export const CoverPhoto = styled.div`
    height: 8rem;
    background: linear-gradient(135deg, #1e40af 0%, #7c2d12 100%);
    position: relative;
`;

export const PartyFlag = styled.div<{ party: 'conservative' | 'labour' | 'liberal-democrat' | 'snp' | 'green' | 'independent' }>`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 2px solid white;

    ${props => props.party === 'conservative' && `
    background: #0087dc;
    color: white;
    `}

    ${props => props.party === 'labour' && `
    background: #e4003b;
    color: white;
    `}

    ${props => props.party === 'liberal-democrat' && `
    background: #faa61a;
    color: white;
    `}

    ${props => props.party === 'snp' && `
    background: #fff95d;
    color: #000;
    `}

    ${props => props.party === 'green' && `
    background: #6ab023;
    color: white;
    `}

    ${props => props.party === 'independent' && `
    background: #666666;
    color: white;
    `}
`;

export const AboutContent = styled.div`
    position: relative;
    padding: 0 1.5rem 1.5rem;
`;

export const AvatarContainer = styled.div`
    position: relative;
    margin: -4rem auto 1rem;
    width: fit-content;
`;

export const Avatar = styled.img<{ size?: 'sm' | 'md' | 'lg' }>`
    width: ${props => props.size === 'sm' ? '2.5rem' : props.size === 'md' ? '4rem' : '8rem'};
    height: ${props => props.size === 'sm' ? '2.5rem' : props.size === 'md' ? '4rem' : '8rem'};
    border-radius: 50%;
    object-fit: cover;
    ${props => props.size === 'lg' && `
    border: 4px solid white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    `}
`;

export const MPTitle = styled.div`
    position: absolute;
    bottom: 0.5rem;
    right: 50%;
    transform: translateX(1.5rem);
    background: #1e40af;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
    border: 2px solid white;
`;

export const UserInfoSection = styled.div`
    text-align: center;
    margin-bottom: 1.5rem;
`;

export const UserName = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
`;

export const UserTitle = styled.p`
    color: #6b7280;
    margin-bottom: 0.75rem;
    font-weight: 500;
`;

export const UserBio = styled.p`
    font-size: 0.875rem;
    color: #9ca3af;
    line-height: 1.6;
`;

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #f9fafb;
    border-radius: 0.75rem;
`;

export const StatItem = styled.div`
    text-align: center;
`;

export const StatValue = styled.div`
    font-size: 1.25rem;
    font-weight: 700;
    color: #111827;
`;

export const StatLabel = styled.div`
    font-size: 0.75rem;
    color: #9ca3af;
`;

export const StatSubtext = styled.div`
    font-size: 0.625rem;
    color: #9ca3af;
    margin-top: 0.125rem;
`;

export const DetailsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 1.5rem;
`;

export const DetailItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
        width: 1rem;
        height: 1rem;
        color: #9ca3af;
    }
`;

export const DetailLink = styled.span`
    color: #2563eb;
    cursor: pointer;

    &:hover {
    text-decoration: underline;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 0.75rem;
`;

export const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
    flex: 1;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;

    ${props => props.variant === 'primary' && `
        background: #1e40af;
        color: white;

        &:hover {
        background: #1e3a8a;
        }
    `}

    ${props => props.variant === 'secondary' && `
        background: #f3f4f6;
        color: #374151;

        &:hover {
        background: #e5e7eb;
        }
        `}
    `;

export const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const CreatePostCard = styled.div`
    background: white;
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
`;

export const CreatePostContent = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const CreatePostInput = styled.input`
    flex: 1;
    background: #f3f4f6;
    border-radius: 9999px;
    padding: 0.75rem 1rem;
    border: none;
    outline: none;
    transition: all 0.2s;

    &:focus {
    outline: 2px solid #1e40af;
    outline-offset: 2px;
    }

    &::placeholder {
    color: #9ca3af;
    }
`;

export const PostCard = styled.article`
    background: white;
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: box-shadow 0.2s;

    &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
`;

export const PostHeader = styled.div`
    padding: 1.5rem 1.5rem 1rem;
`;

export const PostUserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
`;

export const PostUserDetails = styled.div``;

export const PostUserName = styled.h3`
    font-weight: 600;
    color: #111827;
`;

export const PostTimestamp = styled.p`
    font-size: 0.875rem;
    color: #9ca3af;
`;

export const PostContent = styled.div`
    padding: 0 1.5rem 1rem;
`;

export const PostText = styled.p`
    color: #1f2937;
    line-height: 1.6;
    margin-bottom: 1rem;
`;

export const PostImage = styled.img`
    width: 100%;
    border-radius: 0.75rem;
    object-fit: cover;
    max-height: 24rem;
`;

export const PostActions = styled.div`
    padding: 1rem 1.5rem;
    border-top: 1px solid #f3f4f6;
`;

export const PostStats = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    color: #9ca3af;
    margin-bottom: 0.75rem;
`;

export const ActionButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

export const ActionButton = styled.button<{ isActive?: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;

    ${props => props.isActive ? `
        color: #dc2626;
        background: #fef2f2;

        &:hover {
        background: #fee2e2;
        }
        ` : `
        color: #6b7280;
        background: transparent;

        &:hover {
        background: #f3f4f6;
        }
    `}

    svg {
    width: 1.25rem;
    height: 1.25rem;
    }
`;

export const PartyLogoContainer = styled.div<{ src: string }>`
    position: absolute;
    bottom: 0rem;
    right: -1rem;
    width: 3rem;
    height: 3rem;
    background-image: url(${props => props.src});
    background-color: #fff;
    background-size: contain;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 2px solid white;
`;

