import styled from '@emotion/styled';

export const Container = styled.div`
    width: 860px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 100px;

    // &::-webkit-scrollbar {
    //     width: 8px; 
    //     height: 66px;
    // }

    // &::-webkit-scrollbar-track {
    //     background-color: #FFF;
    // }

    // &::-webkit-scrollbar-thumb {
    //     background-color: rgba(18, 20, 23, 0.05);
    //     border-radius: 10px;
    // }
`;

export const Forma = styled.form`
    display: flex;
    gap: 18px;
        align-items: center;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    color: var(--text-filter-title-color);
    font-size: 14px;
`;

export const InputBrandWrap = styled.div`
    width: 224px;
`;

export const InputPriceWrap = styled.div`
    width: 125px;
`;

export const InputMileageWrap = styled.div`
    display: flex;
`;

export const InputMileageFrom = styled.input`
    width: 160px;     
    height: 48px;
    padding-left: 24px;
    background-color: var(--input-color);
    outline: transparent;
    font-size: 16px;
    border-color: transparent;
    border-width: 1.5px;
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.20);

    &::placeholder {
        color: var(--primary-text-color);
        font-size: 18px;
        font-weight: 500;
        line-height: 1.11;
    }
    &:hover,
    &:focus {
        border-color: var(--input-border-hover-color);
`;

export const InputMileageTo = styled.input`
    width: 160px; 
    height: 48px;
    padding-left: 24px;
    background-color: var(--input-color);
    outline: transparent;
    font-size: 16px;
    border-color: transparent;
    border-width: 1.5px;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    transition: border-color var(--transition);

    &::placeholder {
        color: var(--primary-text-color);
        font-size: 18px;
        font-weight: 500;
        line-height: 1.11;
    }
    &:hover,
    &:focus {
        border-color: var(--input-border-hover-color);
`;

export const Button = styled.button`
    min-width: 136px;
    height: 48px;
    margin-top: 10px;

    border-radius: 12px;
    background-color: var(--accent-color);
    color: var(--text-button-color);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color var(--transition);

    &:hover,
    &:focus {
        background-color: var(--hover-color);
`;