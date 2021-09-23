import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    gap: 10px;
    border: none;
    color: ${props => props.theme.text};
    opacity: ${props => props.disabled ? 0.2 : 1};
    background-color: ${props => props.disabled ? 'rgba(0, 0, 0, 0%)' : props.theme.element};
    box-shadow: ${props => props.variant == 'shaded' ? '0 3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1)':'none'};
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover,
    &:active {
        background-color: ${props => props.theme.background}; 
    }
`;

export const Text = styled.p`
`;