import styled, { css } from 'styled-components';
import { VoteIntention } from '../../../types/division';
import { motion } from 'framer-motion';

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.search.background};
	border: 1px solid #e5e7eb;
	border-radius: 0.5rem;
	box-shadow: 0 1px 2px 0 rgba(0 0 0 0.05);
`;

export const Header = styled.div`
	padding: 1rem;
	border-bottom: 1px solid  ${({ theme }) => theme.colors.tag.background};;
`;

export const Title = styled.h2`
	font-size: 1.125rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.text.primary};
	margin-bottom: 0.5rem;
	margin: 0;
`;

export const Subtitle = styled.p`
	font-size: 0.875rem;
	color:  ${({ theme }) => theme.colors.tag.text};
	margin: 0;
`;

export const ContentSection = styled.div`
	perspective: 1000px;
	margin-bottom: 7rem;
	background-color: ${({ theme }) => theme.colors.tag.background};
`;

export const ProgressSection = styled.div`
	margin-bottom: 1rem;
	width: 80%;
`;

export const LabelContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.875rem;
	font-weight: 500;
	margin-bottom: 0.5rem;
`;

export const YesLabel = styled.span`
	color: #16a34a;
	text-align: left;
`;

export const NoLabel = styled.span`
	color: #dc2626;
	text-align: right;
`;

export const AbstainLabel = styled.span`
	color: #6b7280;
	text-align: center;
`;

export const ProgressBarContainer = styled.div`
	width: 100%;
	background-color: #e5e7eb;
	border-radius: 9999px;
	height: 0.75rem;
	display: flex;
	overflow: hidden;
`;

export const ProgressBarSegment = styled.div`
	height: 100%;
	transition: all 0.3s ease-out;
`;

export const YesBar = styled.div`
	height: 100%;
	background-color: #22c55e;
	transition: all 0.3s ease-out;
`;

export const NoBar = styled.div`
	height: 100%;
	background-color: #ef4444;
	transition: all 0.3s ease-out;
`;

export const AbstainBar = styled.div`
	height: 100%;
	background-color: #9ca3af;
	transition: all 0.3s ease-out;
`;

export const PercentageContainer = styled.div`
	display: flex;
	font-size: 0.75rem;
	color: #4b5563;
	margin-top: 0.25rem;
`;

export const PercentageLabel = styled.span``;

export const ActionContainer = styled.div`
	border-top: 1px solid #f3f4f6;
`;

export const ActionButtonContainer = styled.div`
	display: flex;
`;

export const ActionButton = styled.button`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.75rem 1rem;
	color: #4b5563;
	transition: background-color 0.2s;
	background-color: transparent;
	border: none;
	border-left: 1px solid #f3f4f6;
	cursor: pointer;
	:hover {
	background-color: #f9fafb
	};
`;

export const VoteBarContainer = styled.div`
	margin: 16px 0;
	display: flex;
	width: 80%;
	align-items: center;
	flex-direction: column;
`;

export const VoteLabel = styled.div`
	font-size: 14px;
	font-weight: 600;
	margin-bottom: 8px;
	color: #050505;
`;

export const VoteBarBackground = styled.div`
	width: 100%;
	height: 24px;
	background-color: #f0f2f5;
	border-radius: 12px;
	overflow: hidden;
	position: relative;
`;

export const VoteBarFill = styled.div<{ vote?: VoteIntention }>`
	height: 100%;
	width: 100%;
	background-color: ${props => {
		switch (props.vote) {
			case VoteIntention.YES: return '#42b883';
			case VoteIntention.NO: return '#e74c3c';
			case VoteIntention.ABSTAIN: return '#95a5a6';
			default: return '#95a5a6';
		}
	}};
	border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 12px;
	font-weight: 600;
	text-transform: uppercase;
`;


export const ActionIcon = styled.div`
	width: 1rem;
	height: 1rem;
	margin-right: 0.5rem;
`;

export const ActionText = styled.span`
	font-size: 0.875rem;
	font-weight: 500;
`;

export const CardInner = styled(motion.div)`
	position: relative;
	width: 100%;
	height: 100%;
	cursor: pointer;
	transform-style: preserve-3d;
`;

export const CardFace = styled.div`
	position: absolute;
	width: 100%;
	height: 7rem;
	background-color: ${({ theme }) => theme.colors.search.background};
	border: 1px solid #f2f3f5;
	backface-visibility: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
		
`;

export const Back = styled(CardFace)`
	transform: rotateY(180deg);
`;