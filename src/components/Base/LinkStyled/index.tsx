import React from 'react';
import Link, { LinkProps } from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
  className?: string;
  id?: string;
  title?: string;
  linkProps?: React.ForwardRefExoticComponent<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
      LinkProps & {
        children?: React.ReactNode;
      } & React.RefAttributes<HTMLAnchorElement>
  >;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const LinkStyled = ({ href, children, linkProps, openInNewTab = false, className, id, onClick, title }: Props) => {
  if (!href) return <>{children}</>;

  if (!openInNewTab)
    return (
      <Link href={href} {...linkProps} className={className} onClick={onClick} title={title} id={id}>
        {children}
      </Link>
    );

  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={className}
      {...linkProps}
    >
      {children}
    </a>
  );
};

export default LinkStyled;
