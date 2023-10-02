import styled from '@emotion/styled';

export const Item = styled.li`
    width: 100%;
    @media screen and (min-width: 768px) {
        width: calc((100% - 29px) / 2);
    }

    @media screen and (min-width: 1200px) {
        flex-basis: calc((100% - 3 * 29px) / 4);
    }

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Image = styled.img`
    width: 100%;
    height: 268px;
    display: block;
    object-fit: cover;
    border-radius: 14px;
`;

export const InfoWrap = styled.div`
    padding-bottom: 28px;
`;

export const iconStyles = {
    position: 'absolute',
    stroke: '#3470FF',
    fill: 'transparent',
    top: 14,
    right: 14,
    cursor: 'pointer',
};

export const TitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    padding-bottom: 8px;
`;

export const Title = styled.h2`
    font-weight: 500;
    font-size: 14px;
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

export const Button = styled.button`
    width: 100%;
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