import React, {
  HtmlHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxLabel,
  Icon,
} from './styles';

interface CheckboxProps extends HtmlHTMLAttributes<HTMLInputElement> {
  name: string;
  isChecked: boolean;
  handleCheckboxChange?(checked: boolean, name: string): void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  children,
  isChecked,
  handleCheckboxChange,
  ...rest
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleChange = useCallback(() => {
    if (handleCheckboxChange) handleCheckboxChange(!checked, name);

    setChecked(!checked);
  }, [handleCheckboxChange, checked, name]);

  return (
    <CheckboxContainer onClick={handleChange}>
      <HiddenCheckbox name={name} type='checkbox' {...rest} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='20 6 9 17 4 12' />
        </Icon>
      </StyledCheckbox>
      <CheckboxLabel checked={checked}>{children}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
