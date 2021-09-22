import React from 'react';

import { Container } from './styles';

function Button({ children, startIcon, endIcon }) {
  return (
      <Container>
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
      </Container>
  );
}

export default Button;