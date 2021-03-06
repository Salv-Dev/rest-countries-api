import { useState, useRef, useEffect, memo } from 'react';
import Header from '@/components/containers/Header';
import Head from 'next/head';
import SearchBox from '@/components/containers/SearchBox';
import ContentBox from '@/components/containers/ContentBox';
import api from './../src/utils/instanceApi';
import filterByRegion from 'src/utils/filterByRegion';
import Loading from '@/components/ui/Loading';

const selectOptions = [
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania"
]

const Home = ({ setIsDarkMode, isDarkMode, data, setData, initialData }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  console.log(data);

  const changeInputTextValue = (e) => {
    clearTimeout(inputTimeout);
    setInputValue(e.target.value);
    setSelectedOption('');
    console.log(e.target.value);
    if(e.target.value == '') {
      setData(initialData);
    }else {
      var inputTimeout = setTimeout(() => {
        setLoading(true);
      }, 1000);
    }
  }

  const cleanInputTextValue = () => {
    setInputValue("");
    setData(initialData);
    setLoading(true);
    setSelectedOption('');
    inputRef.current.focus();  
  }

  const changeSelectedOption = (e) => {
    setSelectedOption(e.target.innerHTML);
    setData((prev) => filterByRegion(prev, e.target.innerHTML));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      if(inputValue.length > 0) {
        api.get(`/name/${inputValue}`).then(r => {
          setData(r.data);
          setLoading(false);
        }).catch(err => {
          setData([]);
          setLoading(false);
        })
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [inputValue])

  return (
  <div>
    <Head>
      <title>Rest Countries API</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {data ? 
      <>
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
      </>
    :
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <Loading />
        <em>Carregando...</em>
      </div>
    }
  </div>
)}

export default Home;
