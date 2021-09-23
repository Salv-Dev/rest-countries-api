import Button from '@/components/ui/Button';
import ToolBar from '@/components/ui/ToolBar';
import Head from 'next/head';
import AppBar from '@/components/ui/AppBar';
import { IoMoonOutline } from 'react-icons/io5';
import { IoSunnyOutline } from 'react-icons/io5';

const Home = ({ setIsDarkMode, isDarkMode }) => (
  <div>
    <Head>
      <title>Rest Countries API</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AppBar>
      <ToolBar title="Where in the world?">
        <Button 
          startIcon={isDarkMode ? <IoSunnyOutline size={18} /> : <IoMoonOutline size={18} />}
          onClick={() => setIsDarkMode(prev => !prev)}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </ToolBar>
    </AppBar>
  </div>
)

export default Home
