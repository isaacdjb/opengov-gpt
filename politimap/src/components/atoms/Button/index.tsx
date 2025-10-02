import styled, { keyframes } from 'styled-components';

export default styled.button`
    margin-right: 0.75rem;
    padding: 0.75rem 2rem;
    background: ${({ theme }) => theme.gradients.primary};
    color: white;
    font-weight: 600;
    border-radius: 0.75rem;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s;

    &:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        transform: scale(1.05);
    }
`;

