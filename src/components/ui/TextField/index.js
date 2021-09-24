import React, { useState, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import Button from '../Button';

import { Container, Input, Start, End } from './styles';

function TextField({ startAdornment, endAdornment, placeholder }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const changeInputTextValue = (e) => {
      setInputValue(e.target.value);
  }

  const clearInputTextValue = () => {
      setInputValue("");
      inputRef.current.focus();
      
  }

  return (
      <Container>
          {startAdornment && <Start>{startAdornment}</Start>}
          <Input placeholder={placeholder} ref={inputRef} value={inputValue} onChange={changeInputTextValue}/>
          {inputValue.length > 1 && 
          <End>
            <Button dense onClick={clearInputTextValue}>
                <IoClose size={22} />
            </Button>
          </End>
          }
          {endAdornment && <End>{endAdornment}</End>}
      </Container>
  );
}

export default TextField;