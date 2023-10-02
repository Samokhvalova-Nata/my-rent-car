import styled from '@emotion/styled';
import MobileImage from "../../images/backgrounds/hero-red-car-mobile.jpg";
import TabletImage from "../../images/backgrounds/hero-red-car-tablet.jpg"
import DesktopImage from "../../images/backgrounds/hero-red-car-desktop.jpg";

export const SectionHero = styled.section`
    max-width: 100%;
    height: 400px;
    padding: 60px 20px;

    margin-left: auto;
    margin-right: auto;
    text-align: left;

    background-color: var(--borders-color);
    background-image: var(--grad), url(${MobileImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (min-width: 480px) {
        max-width: 480px;
        padding: 70px 35px;
        background-image: var(--grad), url(${TabletImage});
    }

    @media screen and (min-width: 768px) {
        max-width: 768px;
        padding: 100px 60px;
        background-image: var(--grad), url(${DesktopImage});
    }

    @media screen and (min-width: 1200px) {
        max-width: 1600px;
        height: 600px;
        padding: 180px 180px;
    }
`;

export const Title = styled.h1`
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 15px;
    color: var( --text-button-color);
    font-size: 24px;

    @media screen and (min-width: 768px) {
        font-size: 32px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 38px;
    }
`;

export const Description = styled.p`
    max-width: 450px;
    margin-bottom: 25px;
    color: var( --text-button-color);
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

export const ReasonSection = styled.section`
    margin-top: 50px;
`;

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

export const ReasonsTitle = styled.h2`
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
    color: var(--primary-text-color);
    font-size: 16px;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 20px;
    }
`;

export const ReasonsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    
    // align-items: center;
    // justify-content: center;
`;

export const ReasonsItem = styled.li`
    width: 100%;

    @media screen and (min-width: 768px) {
        width: calc((100% - 30px) / 2);
    }

    @media screen and (min-width: 1200px) {
        flex-basis: calc((100% - 3 * 30px) / 4);
    }
}
`;

export const ReasonsWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    // width: 260px;
    // height: 180px;
    max-width: 100%;
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