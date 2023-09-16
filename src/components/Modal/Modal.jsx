import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalStyled, InfoWrap, Image, TitleWrap, Title, Span, DetailsList, DetailsItem, Description, InfoTitle, ConditionItem, ConditionList, SpanCondition, Button } from './Modal.styled';
import { useSelector } from "react-redux";
import { selectCars } from "redux/selectors";
import { ReactComponent as CloseIcon } from '../../images/close.svg';
import { getAge } from "utils";

const modalRoot = document.getElementById('modal-root');

const iconStyles = {
    position: 'absolute',
    stroke: 'transparent',
    fill: '#121417',
    top: 16,
    right: 16,
};

export const Modal = ({ carId, onClose }) => {
    const cars = useSelector(selectCars);

    const {
        id,
        make,
        model,
        year,
        rentalPrice,
        address,
        type,
        accessories,
        mileage,
        img, fuelConsumption, engineSize, description, functionalities, rentalConditions
    } = cars.find(item => item.id === carId);

    const city = address.split(',')[1];
    const country = address.split(',')[2];
    const ageCondition = getAge(rentalConditions);

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleClickBackdrop = e => {
        if (e.target === e.currentTarget) onClose();
    }; 
    
    return createPortal(
        <Overlay onClick={handleClickBackdrop}>
            <ModalStyled>
                <CloseIcon width='24' height='24'
                        style={iconStyles} onClick={onClose}/>
                    <Image src={img} alt={make} loading="lazy" />
                <InfoWrap>
                    <TitleWrap>
                        <Title>{make} <Span>{model}, </Span>{year}</Title>
                    </TitleWrap>
                    <DetailsList>
                        <DetailsItem>{city}</DetailsItem>
                        <DetailsItem>{country}</DetailsItem>
                        <DetailsItem>Id: {id}</DetailsItem>
                        <DetailsItem>Year: {year}</DetailsItem>
                        <DetailsItem>Type: {type}</DetailsItem>
                    </DetailsList>
                    <DetailsList>
                        <DetailsItem>Fuel Consumption: {fuelConsumption}</DetailsItem>
                        <DetailsItem>Engine Size: {engineSize}</DetailsItem>
                    </DetailsList>
                    <Description>{description}</Description>
                    <InfoTitle>Accessories and functionalities:</InfoTitle>
                    <DetailsList>
                        {accessories.map(item => (<DetailsItem key={item}>{item}</DetailsItem>))}
                    </DetailsList>
                    <DetailsList>
                        {functionalities.map(item => (<DetailsItem key={item}>{item}</DetailsItem>))}
                    </DetailsList>
                    <InfoTitle>Rental Conditions:</InfoTitle>
                    <ConditionList>
                        <ConditionItem><p>{ageCondition.conditionText}<SpanCondition> {ageCondition.minAge}</SpanCondition></p></ConditionItem>
                        <ConditionItem>{rentalConditions.split('\n')[1]}</ConditionItem>
                        <ConditionItem>{rentalConditions.split('\n')[2]}</ConditionItem>
                        <ConditionItem>Mileage: <SpanCondition>{mileage.toLocaleString('en-US')}</SpanCondition></ConditionItem>
                        <ConditionItem>Price: <SpanCondition>{rentalPrice}</SpanCondition></ConditionItem>
                    </ConditionList>
                </InfoWrap>
                <Button href="tel:+380730000000">Rental car</Button>
            </ModalStyled>
        </Overlay>,
        modalRoot,
    );    
};