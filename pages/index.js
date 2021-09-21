import Head from 'next/head';
import AppBar from 'src/components/AppBar';

const Home = () => (
  <div>
    <Head>
      <title>Rest Countries API</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AppBar />
  </div>
)

export default Home
