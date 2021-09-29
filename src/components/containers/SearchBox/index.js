import React from 'react';
import Box from '@/components/ui/Box';
import TextField from '@/components/ui/TextField';
import Button from '@/components/ui/Button';
import { IoMdSearch } from 'react-icons/io'

function SearchBox({ inputRef, changeInputTextValue, cleanInputTextValue, inputValue, selectedOption, selectOptions,  changeSelectedOption}) {
  return (
    <Box style={{ margin: '20px', gap: '10px' }}>
        <TextField 
        startAdornment={
            <Button dense >
            <IoMdSearch size={22}/>
            </Button>
        }
        ref={inputRef}
        placeholder="Search for a country..."
        value={inputValue}
        onChange={changeInputTextValue}
        cleanerButton
        onClean={cleanInputTextValue}
        />

        <TextField 
        placeholder="Filter by Region"
        label="select"
        select
        value={selectedOption}
        selectOptions={selectOptions}
        onChange={changeSelectedOption}
        />
    </Box>
  );
}

export default SearchBox;