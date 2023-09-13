import { useDispatch } from 'react-redux';
import { getCarById } from 'redux/operations';
import { Button, Details, Image, Info, Item } from "./CarsListItem.styled";

export const CarsListItem = ({
        id,
        make,
        model,
        year,
        rentalPrice,
        address,
        rentalCompany,
        type,
        functionalities,
        img
    }) => {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(getCarById(id));
    return (
        <Item>
            <Image src={img} alt={make} loading="lazy"/>
            <Info>{make}</Info>
            <Details>{rentalCompany}</Details>
            <Button type='button'
                onClick={handleClick}
            >
                Learn more
            </Button>
        </Item>
    );
};