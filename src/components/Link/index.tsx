import React, { AnchorHTMLAttributes } from 'react';
import { LinkContainer } from './styles';

interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  spanText?: string;
}

const Link: React.FC<ILinkProps> = ({ href, children, spanText }) => {
  return (
    <LinkContainer>
      {spanText && <span>{spanText}</span>}
      <a href={href}>{children}</a>
    </LinkContainer>
  );
};

export default Link;
