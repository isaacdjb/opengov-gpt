import { ExternalLink, MessageCircleQuestion, Share2 } from 'lucide-react';
import * as S from './style';

import type { Vote, VoteIntention } from '../../../types/division';
import { useState } from 'react';
import ShareModal from '../ShareModal';

export interface DivisionDetailsProps {
	vote: Vote,
	intention: VoteIntention
}

const DivisionDetails = ({ vote, intention }: DivisionDetailsProps) => {

	const [flipped, setFlipped] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const ayesCount = vote.ayes.length;
	const noesCount = vote.noes.length;
	const abstainCount = vote.abstains.length;
	const totalVotes = ayesCount + noesCount + abstainCount
	const yesPercentage = (ayesCount / totalVotes) * 100;
	const noPercentage = (noesCount / totalVotes) * 100;
	const abstainPercentage = (abstainCount / totalVotes) * 100;

	return (
		<>
			<S.Container>
				<S.Header>
					<S.Title>
						{vote.title}
					</S.Title>
					<S.Subtitle>
						Vote closed on {vote.date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} • {totalVotes} total votes
					</S.Subtitle>
				</S.Header>

				<S.ContentSection onClick={() => setFlipped(!flipped)}>
					<S.CardInner animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.6 }}>
						<S.CardFace>
							<S.VoteBarContainer>
								<S.VoteLabel>Voted</S.VoteLabel>
								<S.VoteBarBackground>
									<S.VoteBarFill vote={intention}>
										{intention}
									</S.VoteBarFill>
								</S.VoteBarBackground>
							</S.VoteBarContainer>
						</S.CardFace>
						<S.Back>
							<S.ProgressSection>
								<S.LabelContainer>
									<S.YesLabel style={{ width: `${yesPercentage}%` }}>
										Ayes ({ayesCount})
									</S.YesLabel>
									<S.AbstainLabel style={{ width: `${abstainPercentage}%` }}>
										Abstain ({abstainCount})
									</S.AbstainLabel>
									<S.NoLabel style={{ width: `${noPercentage}%` }}>
										Noes ({noesCount})
									</S.NoLabel>
								</S.LabelContainer>

								<S.ProgressBarContainer>
									<S.YesBar style={{ width: `${yesPercentage}%` }} />
									<S.AbstainBar style={{ width: `${abstainPercentage}%` }} />
									<S.NoBar style={{ width: `${noPercentage}%` }} />
								</S.ProgressBarContainer>

								<S.PercentageContainer>
									<S.PercentageLabel style={{ width: `${yesPercentage}%` }}>{yesPercentage.toFixed(1)}%</S.PercentageLabel>
									<S.PercentageLabel style={{ width: `${abstainPercentage}%` }}>{abstainPercentage.toFixed(1)}%</S.PercentageLabel>
									<S.PercentageLabel style={{ width: `${noPercentage}%` }}>{noPercentage.toFixed(1)}%</S.PercentageLabel>
								</S.PercentageContainer>
							</S.ProgressSection>
						</S.Back>
					</S.CardInner>

				</S.ContentSection>

				<S.ActionContainer>
					<S.ActionButtonContainer>
						<S.ActionButton onClick={() => setIsModalOpen(true)}>
							<S.ActionIcon>
								<Share2 style={{ width: '1rem', height: '1rem' }} />
							</S.ActionIcon>
							<S.ActionText>Share</S.ActionText>
						</S.ActionButton>

						<S.ActionButton>
							<S.ActionIcon>
								<ExternalLink style={{ width: '1rem', height: '1rem' }} />
							</S.ActionIcon>
							<S.ActionText>View External</S.ActionText>
						</S.ActionButton>

						<S.ActionButton>
							<S.ActionIcon>
								<MessageCircleQuestion style={{ width: '1rem', height: '1rem' }} />
							</S.ActionIcon>
							<S.ActionText>About</S.ActionText>
						</S.ActionButton>
					</S.ActionButtonContainer>
				</S.ActionContainer>
			</S.Container>
			{isModalOpen && (
				<ShareModal facebookUrl='facebook.com' instagramUrl='instagram.com' linkedinUrl='linkedin.com' twitterUrl='twitter.com' onClose={() => setIsModalOpen(false)} />
			)}
		</>
	);
};

export default DivisionDetails;