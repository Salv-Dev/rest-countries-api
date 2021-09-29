import React from 'react';

import { Container } from './styles';

function CardContent({ children }) {
  return (
      <Container>
          {children}
      </Container>
  );
}

export default CardContent;