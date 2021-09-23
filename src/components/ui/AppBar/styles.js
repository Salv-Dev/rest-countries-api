import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    min-height: 50px;
    background-color: ${props => props.theme.element};
    padding: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
`;