import { useState, useRef, useEffect } from 'react';
import Header from '@/components/containers/Header';
import Head from 'next/head';
import SearchBox from '@/components/containers/SearchBox';
import ContentBox from '@/components/containers/ContentBox';
import api from './../src/utils/instanceApi';

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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const changeInputTextValue = (e) => {
    setInputValue(e.target.value);
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }

  const cleanInputTextValue = () => {
    setInputValue("");
    setLoading(true);
    inputRef.current.focus();  
  }

  const changeSelectedOption = (e) => {
    setSelectedOption(e.target.innerHTML);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(inputValue.length == 0) {
        api.get('/all').then(r => {
          setData(r.data);
          setLoading(false);
        });
      } else {
        api.get(`/name/${inputValue}`).then(r => {
          setData(r.data);
          setLoading(false);
        }).catch(err => {
          setData([]);
          setLoading(false);
        })
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [inputValue, setData])

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
        loading={loading}
      />
      <ContentBox data={data}/>
    </main>
  </div>
)}

export default Home
