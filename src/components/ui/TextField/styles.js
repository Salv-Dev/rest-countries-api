import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    width: ${props => props.select ? '200px' : '100%'};
    min-height: 50px;
    margin: 20px 0;
    background-color: ${props => props.theme.element};
    box-shadow: 0 3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
    border-radius: 5px;
    cursor: ${props => props.select ? 'pointer' : ''};
    transition: all 0.2s ease-in-out;

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

export const MenuItem = styled.ul`
    width: 200px;
    position: absolute;
    left: 0;
    top: 55px;
    padding: 5px 0;
    list-style: none;
    background-color: ${props => props.theme.element};
    box-shadow: 0 3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
    border-radius: 5px;
`;

export const Item = styled.li`
    padding: 10px 20px;
    font-weight: 600;
    transition: all 0.2 ease-in-out;
    opacity: ${props => props.empty ? 0.5 : 1};

    &:hover,
    &:active {
        background-color: ${props => props.empty ? '' : props.theme.background};
    }
`;