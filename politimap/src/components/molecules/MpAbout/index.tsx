import { MapPin, Calendar, Link2, Building, GraduationCap } from 'lucide-react';
import * as S from './style';
import type { Mp } from '../../../types/mp';

interface AboutSectionProps {
    mp: Mp;
}

const MpAbout = ({ mp: mpData }: AboutSectionProps) => {

    return (
        <S.AboutCard>
            <S.CoverPhoto>

            </S.CoverPhoto>

            <S.AboutContent>
                <S.AvatarContainer>
                    <S.Avatar src={mpData.avatar} alt="Profile" size="lg" />
                    <S.PartyLogoContainer src={`${mpData.party}.png`} />
                </S.AvatarContainer>

                <S.UserInfoSection>
                    <S.UserName>{mpData.name}</S.UserName>
                    <S.UserTitle>{mpData.title}</S.UserTitle>
                    <S.UserBio>{mpData.bio}</S.UserBio>
                </S.UserInfoSection>

                <S.StatsGrid>
                    <S.StatItem>
                        <S.StatValue>{mpData.stats.votes}</S.StatValue>
                        <S.StatLabel>Votes</S.StatLabel>
                    </S.StatItem>
                    <S.StatItem>
                        <S.StatValue>{mpData.firstElected}</S.StatValue>
                        <S.StatLabel>First Elected</S.StatLabel>
                        <S.StatSubtext>{mpData.constituency}</S.StatSubtext>
                    </S.StatItem>
                    <S.StatItem>
                        <S.StatValue>{mpData.stats.yearsServed}</S.StatValue>
                        <S.StatLabel>Years Served</S.StatLabel>
                    </S.StatItem>
                </S.StatsGrid>

                <S.DetailsList>
                    <S.DetailItem>
                        <Building />
                        <span>{mpData.constituency}</span>
                    </S.DetailItem>
                    <S.DetailItem>
                        <MapPin />
                        <span>{mpData.location}</span>
                    </S.DetailItem>
                    <S.DetailItem>
                        <Calendar />
                        <span>First elected {mpData.firstElected}</span>
                    </S.DetailItem>
                    <S.DetailItem>
                        <GraduationCap />
                        <span>{mpData.education}</span>
                    </S.DetailItem>
                    <S.DetailItem>
                        <Link2 />
                        <S.DetailLink>{mpData.website}</S.DetailLink>
                    </S.DetailItem>
                </S.DetailsList>
            </S.AboutContent>
        </S.AboutCard>
    );
};

export default MpAbout;