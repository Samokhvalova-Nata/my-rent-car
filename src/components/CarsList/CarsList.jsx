import { CarsListItem } from 'components/CarsListItem';
import { List } from './CarsList.styled';


export const CarsList = ({cars}) => {
    return (
        <List>
            {cars.map(({  id, make, model, year, rentalPrice, address, rentalCompany, type, accessories, mileage, img }) => (
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
                    accessories={accessories}
                    mileage={mileage}
                    img={img}
                />
            ))}
        </List>
    );
};