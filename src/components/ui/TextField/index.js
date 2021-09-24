import React, { forwardRef } from 'react';
import { IoClose } from 'react-icons/io5';
import Button from '../Button';

import { Container, Input, Start, End } from './styles';

const TextField = forwardRef(({ startAdornment, endAdornment, value, onChange, onClean, cleanerButton, placeholder, type, select }, ref) => {

  return (
      <Container>
          {select ? 
            <div />
          :
            <>
                {startAdornment && <Start>{startAdornment}</Start>}
                <Input type={type} placeholder={placeholder} ref={ref} value={value} onChange={onChange}/>

                {cleanerButton && value.length > 1 && 
                <End>
                    <Button dense onClick={onClean}>
                        <IoClose size={22} />
                    </Button>
                </End>
                }
                {endAdornment && <End>{endAdornment}</End>}
            </>  
          }
      </Container>
  );
})

export default TextField;