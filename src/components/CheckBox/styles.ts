import styled, { css } from 'styled-components';

export interface CheckBoxProps {
  checked?: boolean;
  disabled?: boolean;
}

export const CheckboxContainer = styled.div<CheckBoxProps>`
  display: flex;
  cursor: pointer;
  margin: 1rem 0;
  color: var(--darkgray);
  font-family: 'Roboto-Light';
  font-weight: 600;
  font-size: 1.1rem;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  height: 0;
  overflow: hidden;
  width: 0;
`;

export const StyledCheckbox = styled.div<CheckBoxProps>`
  display: inline-block;
  width: 20px;
  height: 20px;

  background: ${props => (props.checked ? 'var(--green)' : 'white')};
  border: 2px solid var(--darkgray);
  transition: all 0.3s;

  :hover {
    background: ${props => (props.checked ? 'var(--green)' : 'var(--gray)')};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

export const CheckboxLabel = styled.span<CheckBoxProps>`
  margin-left: 6px;
  max-width: 25rem;
  transition: color 0.3s;

  color: ${props => (props.checked ? 'black' : 'black')};
`;
