import React, { ReactNode } from 'react';
import Link from 'next/link';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children?: ReactNode;
  link?: string;
  className?: string;
}

const Button = ({
  children, link, className, ...props
}: Props) => {
  const button = (
    <button className={`btn ${className ?? ''}`} {...props}>
      {children}
    </button>
  );

  if (link) {
    return (
      <Link href={link}>
        {button}
      </Link>
    );
  }

  return button;
};

export default Button;
