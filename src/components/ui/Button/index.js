import React from 'react';

import { Container } from './styles';

function Button({ children, startIcon, endIcon, variant, disabled, onClick, dense, fullWidth }) {
  return (
      <Container data-testid="btn" variant={variant} dense={dense} fullWidth={fullWidth} onClick={onClick} disabled={disabled}>
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
      </Container>
  );
}

export default Button;