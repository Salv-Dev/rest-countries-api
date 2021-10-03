import React from 'react';
import Box from '@/components/ui/Box';
import Card from '@/components/ui/Card';
import CardMedia from '@/components/ui/CardMedia';
import CardContent from '@/components/ui/CardContent';

function ContentBox() {
  return (
    <Box 
        style={{ margin: '20px', alignItems: 'center', justifyContent: 'flex-start' }}
    >
        <Card>
        <CardMedia
            component="img"
            image="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg"
            alt="brasil"
        />
        <CardContent>
            <h1 style={{ marginBottom: '20px', fontSize: '1rem', fontWeight: 'bold' }}>Brasil</h1>
            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>População:</span> 00000000</p>
            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Região:</span> América</p>
            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Capital:</span> Brasília-DF</p>
        </CardContent>
        </Card>

        <Card>
        <CardMedia
            component="img"
            image="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg"
            alt="brasil"
        />
        <CardContent>
            <h1 style={{ marginBottom: '20px', fontSize: '1rem', fontWeight: 'bold' }}>Brasil</h1>
            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>População:</span> 00000000</p>
            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Região:</span> América</p>
            <p style={{ marginBottom: '5px' }}><span style={{ fontWeight: 'bold' }}>Capital:</span> Brasília-DF</p>
        </CardContent>
        </Card>
        
    </Box>
  );
}

export default ContentBox;