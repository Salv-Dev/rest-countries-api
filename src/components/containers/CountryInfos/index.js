import React, { useContext } from 'react';
import Box from '@/components/ui/Box';
import Button from '@/components/ui/Button';
import { Context } from 'src/utils/DataContext';
import { Image, ContainerInfo, Info, Title, Paragraph, Span, SubTitle, ContainerBorderCountries } from './styles';

function CountryInfos() {
  const [selectedData, setSelectedData] = useContext(Context);

  return (
    <Box style={{ marginTop: '10px' }} noWrap>
        <Image src={selectedData[0].flags.png} alt={selectedData[0].name.common}/>
        <ContainerInfo>
            <Title>{selectedData[0].name.common}</Title>
            <Info>
                <div>
                    <Paragraph><Span>Native Name:</Span> {selectedData[0].name.nativeName[Object.keys(selectedData[0].name.nativeName)[0]].common}</Paragraph>
                    <Paragraph><Span>Population:</Span> {selectedData[0].population}</Paragraph>
                    <Paragraph><Span>Region:</Span> {selectedData[0].region}</Paragraph>
                    <Paragraph><Span>Sub Region:</Span> {selectedData[0].subregion}</Paragraph>
                    <Paragraph><Span>Capital:</Span> {selectedData[0].capital[0]}</Paragraph>
                </div>
                <div>
                    <Paragraph><Span>Top Level Domain:</Span> {selectedData[0].tld[0]}</Paragraph>
                    <Paragraph><Span>Currencies:</Span> {selectedData[0].currencies[Object.keys(selectedData[0].currencies)[0]].name}</Paragraph>
                    <Paragraph><Span>Languages:</Span> {selectedData[0].languages[Object.keys(selectedData[0].languages)[0]]}</Paragraph>
                </div>
                <div>
                    <SubTitle>Border Countries:</SubTitle>
                    <ContainerBorderCountries>
                        {selectedData[0].borders?.map((item, i) => (
                            <Button
                                variant="shaded"
                                style={{ padding: '8px 20px'}}
                                key={i}
                            >
                                {item}
                            </Button>
                        ))}
                    </ContainerBorderCountries>
                </div>
            </Info>
        </ContainerInfo>
    </Box>
  );
}

export default React.memo(CountryInfos);