import React from 'react';

import { Container } from './styles';

function Box({ children, style, keepDirection, noWrap }) {
  return (
      <Container style={style} keepDirection={keepDirection} noWrap={noWrap}>
          {children}
      </Container>
  );
}

export default Box;