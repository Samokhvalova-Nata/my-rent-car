import styled from '@emotion/styled';

export const Container = styled.div`
    width: 860px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 100px;
`;

export const Forma = styled.form`
    display: flex;
    gap: 18px;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    color: var(--text-filter-title-color);
    font-size: 14px;
    position: relative;
`;

export const InputBrandWrap = styled.div`
    width: 224px;
`;

export const InputPriceWrap = styled.div`
    width: 125px;
`;

export const InputMileageWrap = styled.div`
    display: flex;
    position: relative;
`;

export const InputMileageText = styled.p`
    position: absolute;
    top: 34px;
    left: 24px;
    color: var(--input-placeholder-text-color);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
`;

export const InputMileageFrom = styled.input`
    box-sizing: border-box;
    width: 160px;     
    height: 48px;
    padding: 14px 14px 14px 86px;
    background-color: var(--input-color);
    outline: transparent;
    font-size: 16px;
    border-color: transparent;
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.20);
    transition: border-color var(--transition);

    &:hover,
    :focus {
        border-color: var(--input-border-hover-color);
    }

    &::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }
`;

export const InputMileageTo = styled.input`
    box-sizing: border-box;
    max-width: 160px; 
    height: 48px;
    padding: 14px 14px 14px 86px;
    background-color: var(--input-color);
    outline: transparent;
    font-size: 16px;
    border-color: transparent;
    border-radius: 0px 14px 14px 0px;
    transition: border-color var(--transition);

    &:hover,
    &:focus {
        border-color: var(--input-border-hover-color);
    }
    &::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }
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
    }
    :disabled {
        background-color: var(--text-filter-title-color);
    }
`;

export const InputResetWrap = styled.div`
    display: flex;
    margin-top: 10px;
`;
export const iconStyles = {
    fill: 'var(--hover-color)',
    cursor: 'pointer',
};
