import styled from '@emotion/styled';
import Image from "../../images/bg-hero-second.jpg";

export const SectionHero = styled.section`
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 120px;
    padding-bottom: 120px;
    padding-left: 50px;
    text-align: left;
    background-color: var(--borders-color);
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${Image});
`;

export const Title = styled.h1`
    margin-right: auto;
    margin-left: auto;
    text-align: left;
    margin-bottom: 15px;
    font-size: 30px;
    color: var( --text-button-color);
`;

export const Description = styled.p`
    width: 450px;
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

export const ReasonSection = styled.section`
    margin-top: 50px;
`;

export const ReasonsTitle = styled.h2`
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    margin-bottom: 30px;
    text-transform: uppercase;
    font-size: 20px;
    color: var(--primary-text-color);
`;

export const ReasonsList = styled.ul`
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
`;

export const ReasonsItem = styled.li`
    flex-basis: calc((100% - 3 * 30) / 4);
`;

export const ReasonsWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 180px;
    border-radius: 4px;
    padding: 0 15px 0;
    box-shadow: var(--shadow);
    background: var(--secondary-background-color);
`;

export const ReasonsText = styled.p`
    margin-top: 18px;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.24px;
`;

export const AdvantagesSection = styled.section`
    margin-top: 50px;
    margin-bottom: 30px;
    text-align: left;
`;

export const AdvantagesText = styled.p`
    font-size: 16px;
    color: var(--primary-text-color);
`;

export const AdvantagesList = styled.ul`
    margin: 15px 10px;
`;

export const AdvantagesItem = styled.li`
    display: inline-flex;
    width: 100%;
    font-size: 16px;
    color: var(--primary-text-color);

    &::before {
        content: '';
        min-width: 8px;
        height: 8px;
        margin: 8px 10px 0 0;
        background-color: var(--accent-color);
    }
`;