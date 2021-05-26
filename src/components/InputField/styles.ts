import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  margin: 0.8rem 0 0.5rem;
  font-size: 1.2rem;

  label {
    display: flex;
    font-weight: 700;
    margin-bottom: 0.1rem;
  }

  input {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid var(--lightgray);
  }
`;

export const InputError = styled.div`
  color: red;
  margin: 1rem 0;
  font-size: 0.9rem;
  max-width: 25rem;
  font-family: 'Roboto-Regular';
`;
