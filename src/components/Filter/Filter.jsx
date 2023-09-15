import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateFilter } from "redux/filtersSlice";
import { Button, Container, Forma, Input, Label } from "./Filter.styled";

// const options = [
//     "Buick",
//     "Volvo",
//     "HUMMER",
//     "Subaru",
//     "Mitsubishi",
//     "Nissan",
//     "Lincoln",
//     "GMC",
//     "Hyundai",
//     "MINI",
//     "Bentley",
//     "Mercedes-Benz",
//     "Aston Martin",
//     "Pontiac",
//     "Lamborghini",
//     "Audi",
//     "BMW",
//     "Chevrolet",
//     "Mercedes-Benz",
//     "Chrysler",
//     "Kia",
//     "Land"
// ];

export const Filter = () => {
    const dispatch = useDispatch();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const brand = form.elements.brand.value.trim();
        const mileageFrom = form.elements.mileageFrom.value;
        const mileageTo = form.elements.mileageTo.value;
        const price = form.elements.price.value;

// TODO Update filter logic
        
        if (brand === '' || price === '' || mileageFrom === '' || mileageTo === '') {toast.error('Fields cannot be empty. Enter some data!');
            return;
        }
        dispatch(updateFilter({ brand, price, mileageFrom, mileageTo }));
        form.reset();
    };

    return (
        <Container>
            <Forma onSubmit={handleSubmitForm}>

                <Label htmlFor="brand">Car brand
                <Input type="text" name="brand"/>
                </Label>

                <Label htmlFor="price">Price/ 1 hour
                <select name='price'>
                    <option value=''>To $</option>
                    <option value='30'>30</option>
                    <option value='40'>40</option>
                    <option value='50'>50</option>
                    <option value='60'>60</option>
                    <option value='70'>70</option>
                    <option value='80'>80</option>
                </select>
                </Label>

                <Label htmlFor="mileageFrom">Сar mileage / km
                    <div>
                        <Input type="text" name="mileageFrom" placeholder="From" />
                        <Input type="text" name="mileageTo" placeholder="To" />
                    </div>
                </Label>

                <Button type='submit'>Search</Button>
            </Forma>
        </Container>
    )
};