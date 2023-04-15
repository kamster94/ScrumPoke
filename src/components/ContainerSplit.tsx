import React, { ReactNode } from 'react';
import Container from '@/components/Container';

interface Props {
  leftContainer: ReactNode;
  rightContainer: ReactNode;
}

const ContainerSplit = ({ leftContainer, rightContainer }: Props) => {
  return (
    <Container className="columns-2">
      <Container className="w-full">
        {leftContainer}
      </Container>
      <Container className="w-full">
        {rightContainer}
      </Container>
    </Container>
  );
};

export default ContainerSplit;
