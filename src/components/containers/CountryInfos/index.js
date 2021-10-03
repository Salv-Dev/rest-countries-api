import React from 'react';
import Box from '@/components/ui/Box';
import Button from '@/components/ui/Button';

import { Image, ContainerInfo, Info, Title, Paragraph, Span, SubTitle, ContainerBorderCountries } from './styles';

function CountryInfos() {
  return (
    <Box style={{ marginTop: '10px' }} noWrap>
        <Image src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg" alt="brasil"/>
        <ContainerInfo>
            <Title>Brasil</Title>
            <Info>
                <div>
                    <Paragraph><Span>Native Name:</Span> Brasil</Paragraph>
                    <Paragraph><Span>Population:</Span> 00000000</Paragraph>
                    <Paragraph><Span>Region:</Span> América</Paragraph>
                    <Paragraph><Span>Sub Region:</Span> South América</Paragraph>
                    <Paragraph><Span>Capital:</Span> Brasília-DF</Paragraph>
                </div>
                <div>
                    <Paragraph><Span>Top Level Domain:</Span> .br</Paragraph>
                    <Paragraph><Span>Currencies:</Span> 00000000</Paragraph>
                    <Paragraph><Span>Languages:</Span> Portuguese</Paragraph>
                </div>
                <div>
                    <SubTitle>Border Countries:</SubTitle>
                    <ContainerBorderCountries>
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
                    </ContainerBorderCountries>
                </div>
            </Info>
        </ContainerInfo>
    </Box>
  );
}

export default CountryInfos;