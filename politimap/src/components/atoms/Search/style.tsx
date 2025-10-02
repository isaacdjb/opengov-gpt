import styled from "styled-components";

export const SearchCard = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

export const SearchContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  background: #f3f4f6;
  border-radius: 9999px;
  padding: 0.75rem 1rem;
  border: none;
  outline: none;
  transition: all 0.2s;

  &:focus {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;