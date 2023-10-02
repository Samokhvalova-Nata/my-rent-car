import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { getAllCars } from "redux/operations";
import { resetFilter, updateFilter } from "redux/filtersSlice";
import { SelectInput } from "components/Select/Select";
import { transformSelectData } from "utils";
import brandList from "data/brands.json";
import { ReactComponent as ResetIcon } from '../../images/icons/reset.svg';
import { Button, ButtonWrap, Container, Forma, InputBrandWrap, InputMileageFrom, InputMileageText, InputMileageTo, InputMileageWrap, InputPriceWrap, InputResetWrap, Label, SelectWrap, iconStyles } from "./Filter.styled";

const optionsBrand = transformSelectData(brandList);

const optionsPrice = Array.from({ length: 38 }, (_, index) => ({
    value: String((index + 3) * 10),
    label: String((index + 3) * 10)
}));

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
        dispatch(getAllCars());
        form.reset();
        selectBrandRef.current.clearValue();
        selectPriceRef.current.clearValue();
    };
    
    const handleResetClick = () => {
        dispatch(resetFilter());
    }

    return (
        <Container>
            <Forma onSubmit={handleSubmitForm}>

                <SelectWrap>
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
                </SelectWrap>
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

                <ButtonWrap>
                    <Button type='submit'>Search</Button>
                    <InputResetWrap>
                        <ResetIcon width='24' height='24'
                            style={iconStyles} onClick={handleResetClick}/>
                    </InputResetWrap>
                </ButtonWrap>

            </Forma>
        </Container>
    )
};