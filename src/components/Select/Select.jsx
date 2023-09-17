import Select from 'react-select';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        height: '51px',
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
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'var(--accent-color)' : 'white',
        color: state.isSelected ? 'white' : 'var(--text-filter-options-color)',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '1.25',
    }),
    dropdownIndicator: (provided, state) => ({
            ...provided,
        color: 'var(--primary-text-color)',
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        backgroundColor:'var(--input-color)', 
    }),
    placeholder: (provided, state) => ({
        ...provided,
        backgroundColor: 'var(--input-color)',
        color: 'var(--primary-text-color)',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '1.11',
    }),
};

export const SelectInput = ({ name, options, placeholder }) => {
    return (
        <Select
            name={name}
            options={options}
            styles={customStyles}
            placeholder={placeholder} />
    )
};