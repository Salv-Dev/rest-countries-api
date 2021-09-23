import Header from '@/components/containers/Header';
import Box from '@/components/ui/Box';
import Head from 'next/head';

const Home = ({ setIsDarkMode, isDarkMode }) => (
  <div>
    <Head>
      <title>Rest Countries API</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
    <main>
      <Box></Box>
    </main>
  </div>
)

export default Home
