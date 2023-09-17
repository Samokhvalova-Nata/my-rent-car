import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { getCars } from "redux/operations";
import { updateFilter } from "redux/filtersSlice";
import { SelectInput } from "components/Select/Select";
import { Button, Container, Forma, InputBrandWrap, InputMileageFrom, InputMileageText, InputMileageTo, InputMileageWrap, InputPriceWrap, Label } from "./Filter.styled";

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
    { value: '120', label: '120' },
    { value: '130', label: '130' },
    { value: '140', label: '140' },
    { value: '150', label: '150' },
    { value: '160', label: '160' },
    { value: '170', label: '170' },
    { value: '180', label: '180' },
    { value: '190', label: '190' },
    { value: '200', label: '200' },
    { value: '300', label: '300' },
    { value: '400', label: '400' },
    { value: '500', label: '500' },
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
    const selectBrandRef = useRef(null);
    const selectPriceRef = useRef(null);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const brand = form.elements.brand.value.trim();
        const mileageFrom = form.elements.mileageFrom.value;
        const mileageTo = form.elements.mileageTo.value;
        const price = form.elements.price.value;

        if (brand === '' ||
            price === '' ||
            mileageFrom === '' ||
            mileageTo === '') {
            toast.error('Fields cannot be empty. Enter some data!');
            return;
        }
        dispatch(updateFilter({ brand, price, mileageFrom, mileageTo }));
        dispatch(getCars());
        form.reset();
        selectBrandRef.current.clearValue();
        selectPriceRef.current.clearValue();
    };

    return (
        <Container>
            <Forma onSubmit={handleSubmitForm}>
                <Label>Car brand
                    <InputBrandWrap>
                        <SelectInput
                            name={'brand'}
                            options={optionsBrand}
                            refProp={selectBrandRef}
                            placeholder={'Enter the text'} />
                    </InputBrandWrap>
                </Label>
                <Label>Price/ 1 hour
                    <InputPriceWrap>
                        <SelectInput
                            name={'price'}
                            options={optionsPrice}
                            refProp={selectPriceRef}
                            placeholder={'To $'} />
                    </InputPriceWrap>
                </Label>
                <InputMileageWrap>
                    <Label>Сar mileage / km
                        <InputMileageText>From</InputMileageText>
                        <InputMileageFrom
                            required
                            type="number"
                            name="mileageFrom"
                            min="4000" max="6000"
                            title="Enter a number from 4000 to 6000"
                        />
                    </Label>
                    <Label style={{color: 'white'}}>Сar mileage / km
                        <InputMileageText>To</InputMileageText>
                        <InputMileageTo
                            required
                            type="number"
                            name="mileageTo"
                            min="4001" max="7000"
                            title="Enter a number from 4001 to 7000" />
                    </Label>
                </InputMileageWrap>
                <Button type='submit'>Search</Button>
            </Forma>
        </Container>
    )
};