import React from 'react';

import { Container } from './styles';

const Card = React.forwardRef(({ children, onClick, href }, ref) => {
  return (
      <Container onClick={onClick} href={href} ref={ref}>
          {children}
      </Container>
  );
})

export default Card;