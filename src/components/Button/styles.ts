import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: var(--green);
  background: var(--green);
  color: white;
  font-family: 'Roboto-Medium';
  margin: 0.3rem 0;
  padding: 0.7rem 1rem;
  border: 0;
  font-size: 1.2rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: var(--darkergreen);
  }
`;
