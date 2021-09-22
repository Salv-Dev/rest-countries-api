import React from 'react';

import { Container, Text } from './styles';

function Button({ children, startIcon, endIcon, variant, onClick }) {
  return (
      <Container variant={variant} onClick={onClick}>
          {startIcon && startIcon}
          <Text>{children}</Text>
          {endIcon && endIcon}
      </Container>
  );
}

export default Button;