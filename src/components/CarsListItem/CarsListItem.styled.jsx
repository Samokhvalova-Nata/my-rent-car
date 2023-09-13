import styled from '@emotion/styled';

export const Item = styled.li`
    flex-basis: calc((100% - 4 * (29px)) / 5); 
    // width: 274px;
    height: 426px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    // justify-content: space-between;
    padding: 20px 0px;
`;

export const Image = styled.img`
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 14px;
    // background-color: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2;

    // transition: var(--transition);
    // &:hover,
    // &:focus {
    //     border-bottom-left-radius: 0px;
    //     border-bottom-right-radius: 0px;
    // }
`;

export const Info = styled.h2`
    font-weight: 500;
    color: var(--primary-text-color);
    padding-top: 14px;
    padding-bottom: 8px;
`;

export const Details = styled.p`
    font-size: 12px;
    padding-bottom: 28px;
`;

export const Button = styled.button`
    min-width: 274px;
    height: 44px;
    border-radius: 12px;
    background-color: var(--accent-color);
    color: var(--text-button-color);
    font-weight: 600;
    transition: background-color var(--transition);

        &:hover,
        &:focus {
        background-color: var(--hover-color);
`;