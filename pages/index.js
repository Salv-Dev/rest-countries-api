import ToolBar from '@/components/ToolBar';
import Head from 'next/head';
import AppBar from 'src/components/AppBar';

const Home = () => (
  <div>
    <Head>
      <title>Rest Countries API</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AppBar>
      <ToolBar title="Where in the world?">
        
      </ToolBar>
    </AppBar>
  </div>
)

export default Home
