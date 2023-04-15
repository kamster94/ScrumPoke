import React from 'react';

interface Props{
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => (
  <div className={`container mx-auto ${className ?? ''}`} >
    {children}
  </div>
);

export default Container;
