import styled, { keyframes } from 'styled-components';

const float = keyframes`
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-3px);
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const HeaderContainer = styled.header`
    height: 4rem;
    background: ${({ theme }) => theme.colors.header.background};
    backdrop-filter: blur(20px);
    border-bottom: 1px solid ${({ theme }) => theme.colors.header.border};
    position: sticky;
    top: 0;
    z-index: 50;
    transition: all 0.3s ease;
`;

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const BrandIcon = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    background: ${({ theme }) => theme.colors.brand.gradient};
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${float} 3s ease-in-out infinite;
    transition: background 0.3s ease;

    &::before {
    content: '⚡';
    font-size: 0.75rem;
    }
`;

export const BrandText = styled.span`
    font-size: 1.125rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    transition: color 0.3s ease;
`;

// Theme Toggle - Refined and smaller
export const ThemeToggle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.toggle.border};
    background: ${({ theme }) => theme.colors.toggle.background};
    backdrop-filter: blur(10px);
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;

&:hover {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.colors.toggle.borderHover};
    background: ${({ theme }) => theme.colors.toggle.backgroundHover};
    box-shadow: ${({ theme }) => theme.colors.toggle.shadowHover};
}

&:active {
    transform: translateY(0px) scale(0.98);
}

    svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({ theme }) => theme.colors.toggle.icon};
        transition: all 0.3s ease;

    &.sun-icon {
        animation: ${rotate} 20s linear infinite;
    }
    }
`;

export const ToggleRipple = styled.div<{ isAnimating: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;
    background: ${({ isAnimating, theme }) =>
        isAnimating
            ? `radial-gradient(circle, ${theme.colors.toggle.ripple} 0%, transparent 70%)`
            : 'transparent'};
    transform: ${props => props.isAnimating ? 'scale(1.2)' : 'scale(1)'};
    opacity: ${props => props.isAnimating ? 1 : 0};
    transition: all 0.3s ease;
`;


export const NavLinks = styled.div`
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: none;
    font-weight: 500;
    font-size: 0.875rem;
    transition: color 0.2s ease;

    &:hover {
    color: ${({ theme }) => theme.colors.text.accent};
    }
`;

// Status indicator (optional)
export const StatusDot = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    background: ${({ theme }) => theme.colors.status.online};
    border-radius: 50%;
    animation: ${fadeIn} 2s ease-in-out infinite alternate;
    margin-left: 0.5rem;
`;