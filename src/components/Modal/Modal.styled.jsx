import styled from '@emotion/styled';


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: var( --secondary-text-color);
`;

export const ModalStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 14px;
    background-color: var(--text-button-color);
    padding: 30px;
    width: calc(100% - 20px);
    max-height: calc(100% - 20px);
    overflow: auto;

    @media screen and (min-width: 480px) {
        width: 450px;
        padding: 32px;
    }
    
    @media screen and (min-width: 768px) {
        width: 541px;
        padding: 34px;
        max-height: 830px;
    }
`;

export const iconStyles = {
    position: 'absolute',
    stroke: 'transparent',
    fill: '#121417',
    top: 12,
    right: 12,
    width: 22,
    height: 22,
};

export const Image = styled.img`
    width: 100%;
    height: 314px;
    display: block;
    object-fit: cover;
    border-radius: 14px;
`;

export const InfoWrap = styled.div`
    margin-top: 14px;
    margin-bottom: 24px;
`;

export const TitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    padding-bottom: 8px;
`;

export const Title = styled.h2`
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: var(--primary-text-color);
`;

export const Span = styled.span`
    color: var(--accent-color);
`;

export const DetailsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

export const DetailsItem = styled.li`
    font-size: 12px;
    color: var(--secondary-text-color);
    display: flex;
    align-items: center;

    &:not(:last-child)::after {
        content: '';
        display: inline-block;
        width: 1px;
        height: 16px;
        background-color: var(--lines-background-color);
        margin-left: 6px;
        margin-right: 6px;
    }
`;

export const Description = styled.p`
    line-height: 1.43;
    margin-top: 14px;

    @media screen and (min-width: 480px) {
        width: 361px;
    }

    @media screen and (min-width: 768px) {
        width: 461px;
    }
`;
export const InfoTitle = styled.h3`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    color: var(--primary-text-color);
    margin-top: 24px;
    margin-bottom: 8px;
`;

export const ConditionList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    letter-spacing: -0.24px;

    @media screen and (min-width: 768px) {
        width: 461px;
    }
`;

export const ConditionItem = styled.li`
    border-radius: 35px;
    color: var(--text-conditions-color);
    background-color: var(--conditions-background-color);
    padding: 7px 14px;
`;

export const SpanCondition = styled.span`
    color: var(--accent-color);
    font-weight: 600;
`;

export const Button = styled.a`
    width: 168px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 12px;
    background-color: var(--accent-color);
    color: var(--text-button-color);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    transition: background-color var(--transition);

        &:hover,
        &:focus {
        background-color: var(--hover-color);
`;