import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;

    @media(min-width: 600px) {
        flex-direction: ${props => props.keepDirection ? 'column' : 'row'};
        flex-wrap: ${props => props.noWrap ? 'nowrap' : 'wrap'};
        align-items: flex-start;
    }
`;