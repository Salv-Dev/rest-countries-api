import { useRouter } from 'next/router';
import Header from '@/components/containers/Header';
import Box from '@/components/ui/Box';
import Button from '@/components/ui/Button';
import { BsArrowLeft } from 'react-icons/bs';
import ToolBar from '@/components/ui/ToolBar';
import CountryInfos from '@/components/containers/CountryInfos';
import styled from 'styled-components';
import Link from 'next/link';

const Main = styled.main`
    margin: 20px;

    @media(min-width: 1000px) {
        margin: 20px auto;
        width: 950px;
    }
`;

function countries({ setIsDarkMode, isDarkMode }) {
  const router = useRouter();
  const {country} = router.query;

  return (
    <>
        <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
        <Main>
            <Box keepDirection>
                <ToolBar>
                    <Link href="/">
                        <Button 
                            startIcon={<BsArrowLeft size={18} />}
                            variant="shaded"
                            style={{ padding: '8px 25px'}}
                        >
                            Back
                        </Button>
                    </Link>
                </ToolBar>
                <CountryInfos />
            </Box>
        </Main>
    </>
  );
}

export default countries;