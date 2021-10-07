import React, { useContext } from 'react';
import Box from '@/components/ui/Box';
import Card from '@/components/ui/Card';
import CardMedia from '@/components/ui/CardMedia';
import CardContent from '@/components/ui/CardContent';
import Link from 'next/link';
import { Context } from 'src/utils/DataContext';

function ContentBox({ data }) {
  const [selectedData, setSelectedData] = useContext(Context);

  return (
    <Box 
        style={{ margin: '20px', alignItems: 'center', justifyContent: 'flex-start' }}
    >
        {data.length > 0 ? 

            data.map((item, index) => (
                <Link key={index} href={`/countries/${item.name.common}`} passHref>
                    <Card onClick={() => setSelectedData([item])}>
                        <CardMedia
                            component="img"
                            image={item.flags.png}
                            alt={item.name.common}
                        />
                        <CardContent>
                            <h1 style={{ marginBottom: '20px', fontSize: '1rem', fontWeight: 'bold' }}>{item.name.common}</h1>
                            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Population:</span> {item.population}</p>
                            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Region:</span> {item.region}</p>
                            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Capital:</span> {item.capital}</p>
                        </CardContent>
                    </Card>
                </Link>
            ))
            :
            <p>Nenhum resultado encontrado</p>
        }
    </Box>
  );
}

export default ContentBox;