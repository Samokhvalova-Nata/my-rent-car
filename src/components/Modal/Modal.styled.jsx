import styled from '@emotion/styled';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var( --secondary-text-color);
`;

export const ModalStyled = styled.div`
    // max-width: calc(100vw - 48px);
    // max-height: calc(100vh - 24px);
    width: 541px;
    height: 752px;
    border-radius: 24px;
    background-color: var(--text-button-color);
    padding: 40px;
    position: relative;
`;

export const Image = styled.img`
    width: 100%;
    height: 314px;
    display: block;
    object-fit: cover;
    border-radius: 14px;
`;

export const InfoWrap = styled.div`
    // display: flex;
    // flex-direction: column;
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
    // font-weight: 400;
    // font-size: 14px;
    line-height: 1.43;
    // color: var(--primary-text-color);
    margin-top: 14px;
    width: 461px;
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
    // justify-content: center;
    // align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    letter-spacing: -0.24px;
`;

export const ConditionItem = styled.li`
    display: block;
    height: 32px;
    border-radius: 35px;
    color: var(--text-conditions-color);
    background-color: var(--conditions-background-color);
    padding: 7px 14px;
    text-align: center;
`;

export const SpanCondition = styled.span`
    color: var(--accent-color);
    font-weight: 600;
`;
