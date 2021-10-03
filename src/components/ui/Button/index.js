import React from 'react';

import { Container } from './styles';

function Button({ children, startIcon, endIcon, variant, disabled, onClick, dense, fullWidth, style }) {
  return (
      <Container data-testid="btn" style={style} variant={variant} dense={dense} fullWidth={fullWidth} onClick={onClick} disabled={disabled}>
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
      </Container>
  );
}

export default Button;