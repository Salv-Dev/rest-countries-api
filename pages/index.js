import Button from '@/components/Button';
import ToolBar from '@/components/ToolBar';
import Head from 'next/head';
import AppBar from 'src/components/AppBar';
import { IoMdMoon } from 'react-icons/io';

const Home = () => (
  <div>
    <Head>
      <title>Rest Countries API</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AppBar>
      <ToolBar title="Where in the world?">
        <Button startIcon={<IoMdMoon />}>Dark Mode</Button>
      </ToolBar>
    </AppBar>
  </div>
)

export default Home
