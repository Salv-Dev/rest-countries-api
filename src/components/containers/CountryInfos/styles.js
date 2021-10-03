import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;

    @media(min-width: 600px) {
        width: 300px;
    }

    @media(min-width: 1000px) {
        width: 500px;
    }
`;

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 1000px) {
        height: 333px;
        justify-content: center;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    @media(min-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const Title = styled.h1`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Paragraph = styled.p`
    margin-bottom: 5px;
`;

export const Span = styled.span`
    font-weight: bold;
`;

export const SubTitle = styled.p`
    font-size: 1rem;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const ContainerBorderCountries = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;