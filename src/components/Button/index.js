import React from 'react';

import { Container, Text } from './styles';

function Button({ children, startIcon, endIcon, variant, disabled, onClick }) {
  return (
      <Container data-testid="btn" variant={variant} onClick={onClick} disabled={disabled}>
          {startIcon && startIcon}
          <Text>{children}</Text>
          {endIcon && endIcon}
      </Container>
  );
}

export default Button;