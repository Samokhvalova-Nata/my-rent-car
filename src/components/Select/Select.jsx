import Select from 'react-select';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        height: '48px',
        padding: '0',
        paddingLeft: '14px',
        backgroundColor: 'var(--input-color)',
        borderRadius: '14px',
        borderColor: state.isSelected ? 'transparent' : 'transparent',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '1.1',
        '&:hover': {
            borderColor: 'var(--input-border-hover-color)',
        },
        "@media screen and (min-width: 768px)": {
        fontSize: '18px',
    }
    }),
    option: (provided, state) => ({
        ...provided,
        borderRadius: '14px',
        paddingBottom: '8px',
        backgroundColor: state.isSelected ? 'var(--accent-color)' : 'white',
        color: state.isSelected ? 'white' : 'var(--text-filter-options-color)',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '1.25',
        cursor: 'pointer',
        "@media screen and (min-width: 768px)": {
            fontSize: '16px',
        }
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: 'var(--primary-text-color)',
        cursor: 'pointer',
        transform: state.isFocused ? 'rotate(180deg)' : null,
    }),
    indicatorSeparator: provided => ({
        ...provided,
        backgroundColor:'var(--input-color)', 
    }),
    placeholder: provided => ({
        ...provided,
        backgroundColor: 'var(--input-color)',
        color: 'var(--primary-text-color)',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '1.11',
        "@media screen and (min-width: 768px)": {
            fontSize: '18px',
        }
    }),
    menu: provided => ({
        ...provided,
        borderRadius: '14px',
        padding: '14px 8px 14px 18px',
    }),
    menuList: provided => ({
        ...provided,
        '::-webkit-scrollbar': {
            width: '8px',
            height: '130px',
        },
        '::-webkit-scrollbar-thumb': {
            background: 'var(--scroll-background-color)',
            borderRadius: '10px',
        },
    })
};

export const SelectInput = ({ name, options, placeholder, refProp} ) => {

    return (
        <Select
            required
            name={name}
            options={options}
            styles={customStyles}
            placeholder={placeholder}
            ref={refProp}/>
    )
};