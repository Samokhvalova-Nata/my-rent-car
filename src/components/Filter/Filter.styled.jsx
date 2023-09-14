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
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    color: var(--text-filter-title-color);
    font-size: 14px;
`;

export const Input = styled.input`
    width: 224px;    
    height: 48px;
    border-radius: 14px;
    background-color: var(--input-color);
    outline: transparent;
    border-color: transparent;
`;

export const Button = styled.button`
    width: 136px;
    height: 48px;

    border-radius: 12px;
    background-color: var(--accent-color);
    color: var(--text-button-color);
    font-size: 14px;
    font-weight: 600;
    transition: background-color var(--transition);

        &:hover,
        &:focus {
        background-color: var(--hover-color);
`;