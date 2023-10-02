import styled from '@emotion/styled';

export const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 15px;
    font-size: 20px;
`;

export const Button = styled.button`
    display: block;
    color: var(--accent-color);
    font-size: 16px;
    font-weight: 500;
    text-decoration: underline;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 100px;
    cursor: pointer;
    background-color: transparent;

    @media screen and (min-width: 768px) {
        margin-bottom: 150px;
    }
`;