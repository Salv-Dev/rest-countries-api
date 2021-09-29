import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    @media(min-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
    }
`;