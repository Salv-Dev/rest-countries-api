import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 250px;
    min-height: 300px;
    background-color: ${props => props.theme.element};
    box-shadow: 0 3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
    border-radius: 5px;
    cursor: ${props => props.onClick ? 'pointer' : ''};
`;