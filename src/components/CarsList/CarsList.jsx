import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/selectors';
import { List } from './CarsList.styled';
import { CarsListItem } from '../../components/CarsListItem/CarsListItem';

export const CarsList = () => {
    const cars = useSelector(selectCars);

    return (
        <List>
            {cars.map(({  id, make, model, year, rentalPrice, address, rentalCompany, type, functionalities, img }) => (
                <CarsListItem
                    key={id}
                    id={id}
                    make={make}
                    model={model}
                    year={year}
                    rentalPrice={rentalPrice}
                    address={address}
                    rentalCompany={rentalCompany}
                    type={type}
                    functionalities={functionalities}
                    img={img}
                />
            ))}
        </List>
    );
};