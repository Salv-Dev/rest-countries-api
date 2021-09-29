import { useState, useRef } from 'react';
import Header from '@/components/containers/Header';
import Head from 'next/head';
import SearchBox from '@/components/containers/SearchBox';

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
      <SearchBox 
        inputRef={inputRef}
        inputValue={inputValue}
        selectedOption={selectedOption}
        selectOptions={selectOptions}
        changeInputTextValue={changeInputTextValue}
        cleanInputTextValue={cleanInputTextValue}
        changeSelectedOption={changeSelectedOption}
      />
    </main>
  </div>
)}

export default Home
