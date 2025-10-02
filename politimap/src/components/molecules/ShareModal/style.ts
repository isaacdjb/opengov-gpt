import { styled } from "styled-components";

export const Container = styled.div`
    padding: 2rem;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    padding: 1rem;
`;

export const ModalContent = styled.div`
    background-color: white;
    border-radius: 0.75rem;
    max-width: 28rem;
    width: 100%;
    padding: 1.5rem;
    position: relative;
    animation: fadeIn 0.2s ease-out;
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #9ca3af;
    transition: color 0.2s ease;
    
    &:hover {
        color: #4b5563;
    }
`;

export const SocialMediaButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background-color: #eff6ff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;
    
    &:hover {
        background-color: #dbeafe;
    }
`;

export const SocialIconContainer = styled.div<{ iconBg: string }>`
    width: 2.5rem;
    height: 2.5rem;
    background: ${props => props.iconBg || '#6b7280'};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    
    ${SocialMediaButton}:hover & {
        transform: scale(1.1);
    }
`;

export const CopyButton = styled.button<{ copied: boolean }>`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    border: 1px solid;
    cursor: pointer;
    transition: all 0.2s ease;
    
    ${props => props.copied ? `
        background-color: #dcfce7;
        color: #15803d;
        border-color: #bbf7d0;
    ` : `
        background-color: #f3f4f6;
        color: #374151;
        border-color: #d1d5db;
        
        &:hover {
        background-color: #e5e7eb;
        }
    `}
`;

// Text Components
export const ModalHeader = styled.div`
    margin-bottom: 1.5rem;
`;

export const ModalTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
    margin: 0 0 0.5rem 0;
`;

export const ModalSubtitle = styled.p`
    color: #4b5563;
    margin: 0;
`;

export const SocialButtonText = styled.span`
    font-weight: 500;
    color: #1f2937;
`;

export const CopyLinkLabel = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin: 0 0 0.75rem 0;
`;

export const CopiedText = styled.span`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

export const SocialButtonsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
`;

export const CopyLinkSection = styled.div`
    border-top: 1px solid #e5e7eb;
    padding-top: 1rem;
`;

export const CopyLinkControls = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const CopyInput = styled.input`
    flex: 1;
    padding: 0.5rem 0.75rem;
    background-color: #f9fafb;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: #4b5563;
  
  &:focus {
        outline: none;
        border-color: #3b82f6;
  }
`;