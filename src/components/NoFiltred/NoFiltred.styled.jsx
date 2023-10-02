import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // outline: 2px solid tomato;

    max-width: 100%;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 50px;
    margin-left: auto;
    margin-right: auto;

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

export const Text = styled.p`
    margin-top: 50px;
    margin-bottom: 25px;
    color: var(--primary-text-color);
    text-align: center;
    font-size: 14px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
`;

export const Button = styled.button`
    width: 270px;
    height: 44px;

    border-radius: 12px;
    background-color: var(--accent-color);
    color: var(--text-button-color);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    cursor: pointer;
    transition: background-color var(--transition);

    &:hover,
    &:focus {
        background-color: var(--hover-color);
`;