import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateFilter } from "redux/filtersSlice";
import { Button, Container, Forma, InputBrandWrap, InputMileageFrom, InputMileageTo, InputMileageWrap, InputPriceWrap, Label } from "./Filter.styled";
import { SelectInput } from "components/Select/Select";

const optionsPrice = [
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' },
    { value: '60', label: '60' },
    { value: '70', label: '70' },
    { value: '80', label: '80' },
    { value: '90', label: '90' },
    { value: '100', label: '100' },
    { value: '110', label: '110' },
];

const optionsBrand= [
    { value: 'Buick', label: 'Buick' },
    { value: 'Volvo', label: 'Volvo' },
    { value: 'HUMMER', label: 'HUMMER' },
    { value: 'Subaru', label: 'Subaru' },
    { value: 'Mitsubishi', label: 'Mitsubishi' },
    { value: 'Nissan', label: 'Nissan' },
    { value: 'Lincoln', label: 'Lincoln' },
    { value: 'GMC', label: 'GMC' },
    { value: 'Hyundai', label: 'Hyundai' },
    { value: 'MINI', label: 'MINI' },
    { value: 'Bentley', label: 'Bentley' },
    { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
    { value: 'Aston Martin', label: 'Aston Martin' },
    { value: 'Pontiac', label: 'Pontiac' },
    { value: 'Lamborghini', label: 'Lamborghini' },
    { value: 'Audi', label: 'Audi' },
    { value: 'BMW', label: 'BMW' },
    { value: 'Chevrolet', label: 'Chevrolet' },
    { value: 'Chrysler', label: 'Chrysler' },
    { value: 'Kia', label: 'Kia' },
    { value: 'Land', label: 'Land' },
];

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
                    <InputBrandWrap>
                        <SelectInput name={'brand'} options={optionsBrand} placeholder={'Enter the text'} />
                    </InputBrandWrap>
                </Label>

                <Label htmlFor="price">Price/ 1 hour
                    <InputPriceWrap>
                        <SelectInput name={'price'} options={optionsPrice} placeholder={'To $'}/>
                    </InputPriceWrap>
                </Label>

                <Label htmlFor="mileageFrom">Сar mileage / km
                    <InputMileageWrap>
                        <InputMileageFrom type="text" name="mileageFrom" placeholder="From" />
                        <InputMileageTo type="text" name="mileageTo" placeholder="To" />
                    </InputMileageWrap>
                </Label>

                <Button type='submit'>Search</Button>
            </Forma>
        </Container>
    )
};