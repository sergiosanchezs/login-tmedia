import React, { InputHTMLAttributes, PropsWithChildren } from 'react';
import { InputContainer, InputError } from './styles';

interface IInputFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    React.ClassAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputField: React.FC<IInputFieldProps> = ({
  name,
  label,
  type,
  error,
  ...props
}) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} id={name} {...props} />
      {!!error && <InputError>{error}</InputError>}
    </InputContainer>
  );
};
export default InputField;
