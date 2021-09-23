import React from 'react';

import { Container } from './styles';

function Box({ children, style }) {
  return (
      <Container style={style}>
          {children}
      </Container>
  );
}

export default Box;