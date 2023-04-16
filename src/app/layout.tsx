import './globals.css';
import manifest from '@/../manifest.json' assert { type: 'JSON' };
import React from 'react';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import ThemeWrapper from '@/components/ThemeWrapper';

export const metadata = {
  title: manifest.siteName,
  description: 'A Scrum Poker App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeWrapper lang='en'>
      <body>
        <TopBar />
        <div className='py-20 md:px-1 px-5'>
          {children}
        </div>
        <Footer />
      </body>
    </ThemeWrapper>
  );
}
