import React from 'react';

import { Container, Title } from './styles';

function ToolBar({ title, children }) {
  return (
      <Container>
        {title && <Title>{title}</Title>}
        {children}
      </Container>
  );
}

export default ToolBar;