import styled from '@emotion/styled';
import Image from "../../images/bg-hero-second.jpg";

export const Section = styled.section`
    // height: 440px;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 120px;
    padding-bottom: 120px;
    padding-left: 50px;
    text-align: left;
    background-color: var(--borders-color);
    background-repeat: no-repeat;
    background-image: url(${Image});
`;

export const Title = styled.h1`
    margin-right: auto;
    margin-left: auto;
    text-align: left;
    // text-transform: uppercase;

    margin-bottom: 15px;
    // padding-left: 50px;
    font-size: 30px;
    color: var( --text-button-color);
`;

export const Description = styled.p`
    width: 450px;
    text-align: left;
    // padding-left: 50px;
    margin-bottom: 25px;
    font-size: 16px;
    color: var( --text-button-color);
    text-align: left;
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