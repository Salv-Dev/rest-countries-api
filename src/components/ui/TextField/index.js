import React, { useState, forwardRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Button from '../Button';

import { Container, Input, Start, End, Select, Paragraph, MenuItem, Item } from './styles';

const TextField = forwardRef(({ startAdornment, endAdornment, value, onChange, onClean, cleanerButton, placeholder, type, select, label, selectOptions }, ref) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  console.log(selectedOption);

  const changeSelectedOption = (e) => {
    onChange(e)
    setSelectedOption(e.target.innerHTML);
  }
  
  return (
      <Container select={select}>
          {select ? 
            <Select aria-label={label} onClick={() => setSelectOpen(prev => !prev)}>
                <Paragraph>
                  {selectedOption ? selectedOption : placeholder}
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
                            onClick={changeSelectedOption}  
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

export default TextField;