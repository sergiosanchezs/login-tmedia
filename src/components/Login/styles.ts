import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  border-top: 3px solid var(--green);
  background-color: white;
  align-items: stretch;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 1.8rem;
  background-color: white;
  flex-direction: column;
  align-content: center;
  min-width: 25rem;
`;

export const Title = styled.div`
  font-size: 2rem;
  align-self: center;
  font-weight: 600;
`;
