import { useState, useRef } from 'react';
import Header from '@/components/containers/Header';
import Box from '@/components/ui/Box';
import TextField from '@/components/ui/TextField';
import Button from '@/components/ui/Button';
import { IoMdSearch } from 'react-icons/io'
import Head from 'next/head';

const selectOptions = [
  "Africa",
  "América",
  "Asia",
  "Europa",
  "Oceania"
]

const Home = ({ setIsDarkMode, isDarkMode }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const inputRef = useRef();

  const changeInputTextValue = (e) => {
    setInputValue(e.target.value);
  }

  const cleanInputTextValue = () => {
    setInputValue("");
    inputRef.current.focus();  
  }

  const changeSelectedOption = (e) => {
    setSelectedOption(e.target.innerHTML);
  }

  return (
  <div>
    <Head>
      <title>Rest Countries API</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
    <main>
      <Box style={{ margin: '20px' }}>
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
    </main>
  </div>
)}

export default Home
