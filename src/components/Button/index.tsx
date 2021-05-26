import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { ButtonStyled } from './styles';

const Button: React.FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

export default Button;
