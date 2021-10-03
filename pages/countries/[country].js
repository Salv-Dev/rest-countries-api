import { useRouter } from 'next/router';
import Header from '@/components/containers/Header';
import Box from '@/components/ui/Box';
import Button from '@/components/ui/Button';
import { BsArrowLeft } from 'react-icons/bs';
import ToolBar from '@/components/ui/ToolBar';

function countries({ setIsDarkMode, isDarkMode }) {
  const router = useRouter();
  const {country} = router.query;

  return (
    <>
        <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
        <main>
            <Box style={{ margin: '20px' }}>
                <ToolBar>
                    <Button 
                        startIcon={<BsArrowLeft size={18} />}
                        variant="shaded"
                        style={{ padding: '8px 25px'}}
                    >
                        Back
                    </Button>
                </ToolBar>
                <Box style={{ marginTop: '10px' }}>
                    <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg" alt="brasil" width="100%" />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px'}}>
                        <h1 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Brasil</h1>
                        <div>
                            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Native Name:</span> Brasil</p>
                            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Population:</span> 00000000</p>
                            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Region:</span> América</p>
                            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Sub Region:</span> South América</p>
                            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Capital:</span> Brasília-DF</p>
                        </div>
                        <div>
                            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Top Level Domain:</span> .br</p>
                            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Currencies:</span> 00000000</p>
                            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Languages:</span> Portuguese</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '1rem', marginBottom: '10px', fontWeight: 'bold' }}>Border Countries:</p>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                                <Button
                                    variant="shaded"
                                    style={{ padding: '8px 20px'}}
                                >
                                    Argentina
                                </Button>
                                <Button
                                    variant="shaded"
                                    style={{ padding: '8px 20px'}}
                                >
                                    Paraguai
                                </Button>
                                <Button
                                    variant="shaded"
                                    style={{ padding: '8px 20px'}}
                                >
                                    Colombia
                                </Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
        </main>
    </>
  );
}

export default countries;