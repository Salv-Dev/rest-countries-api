import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg)
    }
`;

export const LoadingIcon = styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid ${props => props.theme.foreground};
    border-bottom: 2px solid ${props => props.theme.background};
    border-radius: 50%;
    animation: ${rotate} infinite .5s linear;
`;