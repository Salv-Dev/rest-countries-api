import React, { useState, forwardRef, useRef, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Button from '../Button';

import { Container, Input, Start, End, Select, Paragraph, MenuItem, Item } from './styles';

const TextField = forwardRef(({ startAdornment, endAdornment, value, onChange, onClean, cleanerButton, placeholder, type, select, label, selectOptions }, ref) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const selectMenuRef = useRef();

  
  const clickSelectField = () => {
    setSelectOpen(prev => !prev);
  }
  
  const handleClickOutside = (e) => {
    if (selectMenuRef.current && !selectMenuRef.current.contains(e.target)) {
      setSelectOpen(false);
    }
  }
  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, {capture: true});
    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [selectMenuRef]);

  return (
      <Container data-testid="textField" select={select}>
          {select ? 
            <Select aria-label={label} onClick={clickSelectField} ref={selectMenuRef}>
                <Paragraph>
                  {value ? value : placeholder}
                </Paragraph>
                {selectOpen ?
                  <> 
                    <IoIosArrowUp />
                    <MenuItem>
                      {selectOptions ?
                      <>
                        {selectOptions.map((item, index)=> (
                          <Item
                            key={index}
                            onClick={onChange}  
                          >{item}</Item>
                        ))}
                      </>
                      :
                      <Item empty>Vazio</Item>
                      }
                    </MenuItem>
                  </>
                  :
                  <IoIosArrowDown />
                }
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

export default React.memo(TextField);