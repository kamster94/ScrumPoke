'use client';

import React, { ReactNode } from 'react';
import useSiteProperties from '@/hooks/useSiteProperties';

interface Props extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>{
  children: ReactNode;
}

const ThemeWrapper = ({ children, ...props }: Props) => {
  const { siteTheme } = useSiteProperties();

  return (
    <html {...props} data-theme={siteTheme.theme}>
      {children}
    </html>
  );
};

export default ThemeWrapper;
