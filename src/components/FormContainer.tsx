import React, { ReactNode } from 'react';
import Container from '@/components/Container';

interface Props {
  children: ReactNode;
}

const FormContainer = ({ children }: Props) => {
  return (
    <Container className='max-w-xl'>
      <div className='flex flex-col gap-4 w-full'>
        {children}
      </div>
    </Container>
  );
};

export default FormContainer;
