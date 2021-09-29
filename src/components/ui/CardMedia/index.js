import React from 'react';

import { Container, Image } from './styles';

function CardMedia({ component, height, image, alt }) {
  return (
      <Container height={height}>
          {component == 'img' ? 
            <Image 
                src={image}
                alt={alt}
                height={height}
            />
          :
            <p>formato de componente sem compatibilidade no momento</p>
          }
      </Container>
  );
}

export default CardMedia;