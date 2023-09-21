import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
`;

export const Text = styled.p`
    margin-top: 50px;
    margin-bottom: 25px;
    font-size: 16px;
    color: var(--primary-text-color);
    text-align: center;
`;

export const Button = styled.button`
    width: 270px;
    height: 44px;
    margin-bottom: 50px;

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