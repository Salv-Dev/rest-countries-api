import React from 'react';

import { Container } from './styles';

function AppBar({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default AppBar;