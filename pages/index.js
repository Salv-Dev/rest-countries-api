import Header from '@/components/containers/Header';
import Box from '@/components/ui/Box';
import TextField from '@/components/ui/TextField';
import Button from '@/components/ui/Button';
import { IoMdSearch } from 'react-icons/io'
import Head from 'next/head';

const Home = ({ setIsDarkMode, isDarkMode }) => (
  <div>
    <Head>
      <title>Rest Countries API</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
    <main>
      <Box style={{ margin: '20px' }}>
        <TextField 
          startAdornment={<Button dense ><IoMdSearch size={22}/></Button>}
          placeholder="Search for a country..."
        />
      </Box>
    </main>
  </div>
)

export default Home
