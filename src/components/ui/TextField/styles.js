import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: ${props => props.select ? '200px' : '100%'};
    min-height: 50px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.element};
    box-shadow: 0 3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
    border-radius: 5px;

    @media(min-width: 600px) {
        width: ${props => props.select ? '200px' : '400px'};
    }
`;

export const Input = styled.input`
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    margin: 10px;
`;

export const Start = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 50px;
    margin: 10px 0 10px 10px;
`;

export const End = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 50px;
    margin: 10px 10px 10px 0;
`;

export const Select = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin: 10px 20px;
`;

export const Paragraph = styled.p`
    font-weight: 600;
`;