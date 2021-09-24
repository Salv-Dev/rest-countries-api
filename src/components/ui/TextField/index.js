import React, { useState, forwardRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Button from '../Button';

import { Container, Input, Start, End, Select, Paragraph } from './styles';

const TextField = forwardRef(({ startAdornment, endAdornment, value, onChange, onClean, cleanerButton, placeholder, type, select, label }, ref) => {
  const [selectOpen, setSelectOpen] = useState(false);
  
  return (
      <Container select={select}>
          {select ? 
            <Select aria-label={label} onClick={() => setSelectOpen(prev => !prev)}>
                <Paragraph>{placeholder}</Paragraph>
                {selectOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </Select>
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