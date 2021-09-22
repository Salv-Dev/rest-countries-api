import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    gap: 10px;
    border: none;
    background: transparent;
    box-shadow: ${props => props.variant == 'shaded' ? '0 3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1)':'none'};
    transition: background-color .2s ease-in-out;
    cursor: pointer;

    &:hover,
    &:active {
        background-color: hsl(0, 0%, 98%); 
    }
`;

export const Text = styled.p`
`;