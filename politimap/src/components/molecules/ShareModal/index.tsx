import React, { useState } from 'react';
import styled from 'styled-components';
import { Share2, Facebook, Twitter, Linkedin, Instagram, Copy, X, Container } from 'lucide-react';
import * as S from './style'

interface ShareModalProps {
    onClose: () => void
    facebookUrl: string,
    instagramUrl: string,
    twitterUrl: string,
    linkedinUrl: string,

}

const ShareModal = ({ onClose, facebookUrl, instagramUrl, twitterUrl, linkedinUrl }: ShareModalProps) => {

    const [copied, setCopied] = useState(false);

    // You can customize these values

    const shareFacebook = () => {
        window.open(facebookUrl, '_blank')
    }

    const shareInstagram = () => {
        window.open(instagramUrl, '_blank')
    }

    const shareTwitter = () => {
        window.open(twitterUrl, '_blank')
    }

    const shareLinkedin = () => {
        window.open(linkedinUrl, '_blank')
    }

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <S.ModalOverlay>
            <S.ModalContent>
                <S.CloseButton onClick={onClose}>
                    <X size={24} />
                </S.CloseButton>
                <S.ModalHeader>
                    <S.ModalTitle>Share this content</S.ModalTitle>
                    <S.ModalSubtitle>Choose your preferred platform</S.ModalSubtitle>
                </S.ModalHeader>
                <S.SocialButtonsGrid>
                    <S.SocialMediaButton
                        onClick={shareFacebook}
                    >
                        <S.SocialIconContainer iconBg="#2563eb">
                            <Facebook size={20} color="white" />
                        </S.SocialIconContainer>
                        <S.SocialButtonText>Facebook</S.SocialButtonText>
                    </S.SocialMediaButton>
                    <S.SocialMediaButton
                        onClick={shareTwitter}
                    >
                        <S.SocialIconContainer iconBg="#0ea5e9">
                            <Twitter size={20} color="white" />
                        </S.SocialIconContainer>
                        <S.SocialButtonText>Twitter</S.SocialButtonText>
                    </S.SocialMediaButton>
                    <S.SocialMediaButton
                        onClick={shareLinkedin}
                    >
                        <S.SocialIconContainer iconBg="#1d4ed8">
                            <Linkedin size={20} color="white" />
                        </S.SocialIconContainer>
                        <S.SocialButtonText>LinkedIn</S.SocialButtonText>
                    </S.SocialMediaButton>
                    <S.SocialMediaButton
                        onClick={shareInstagram}
                    >
                        <S.SocialIconContainer iconBg="linear-gradient(45deg, #f59e0b, #ef4444, #8b5cf6)">
                            <Instagram size={20} color="white" />
                        </S.SocialIconContainer>
                        <S.SocialButtonText>Instagram</S.SocialButtonText>
                    </S.SocialMediaButton>
                </S.SocialButtonsGrid>
                <S.CopyLinkSection>
                    <S.CopyLinkLabel>Or copy link</S.CopyLinkLabel>
                    <S.CopyLinkControls>
                        <S.CopyInput value={window.location.href} readOnly />
                        <S.CopyButton onClick={copyToClipboard} copied={copied}>
                            {copied ? (
                                <S.CopiedText>✓ Copied</S.CopiedText>
                            ) : (
                                <Copy size={16} />
                            )}
                        </S.CopyButton>
                    </S.CopyLinkControls>
                </S.CopyLinkSection>
            </S.ModalContent>
        </S.ModalOverlay>
    );
};

export default ShareModal;