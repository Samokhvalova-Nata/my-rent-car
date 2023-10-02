import styled from '@emotion/styled';

export const Container = styled.div`
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    // outline: 2px solid tomato;

    @media screen and (min-width: 480px) {
        max-width: 480px;
    } 

    @media screen and (min-width: 768px) {
        max-width: 768px;
    }    

    @media screen and (min-width: 1200px) {
        max-width: 1200px;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
    padding-top: 50px;
    padding-bottom: 50px;

    @media screen and (min-width: 768px) {
        padding-bottom: 100px;
    }
`;