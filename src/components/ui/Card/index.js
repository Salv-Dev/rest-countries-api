import React from 'react';

import { Container } from './styles';

function Card({ children, onClick }) {
  return (
      <Container onClick={onClick}>
          {children}
      </Container>
  );
}

export default Card;