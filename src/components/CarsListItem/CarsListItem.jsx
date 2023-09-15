import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { getCarById } from 'redux/operations';
import { ReactComponent as FavoriteIcon } from '../../images/favorite.svg';
import { Button, Image, Title, Item, Span, TitleWrap, DetailsItem, DetailsList, InfoWrap } from "./CarsListItem.styled";
import { Modal } from 'components/Modal';


const iconStyles = {
    position: 'absolute',
    stroke: '#FFFFFFCC',
    fill: 'transparent',
    top: 14,
    right: 14,
};

export const CarsListItem = ({
        id,
        make,
        model,
        year,
        rentalPrice,
        address,
        rentalCompany,
        type,
        accessories,
        mileage,
        img
    }) => {
    // const dispatch = useDispatch();
    const [isShowModal, setIsShowModal] = useState(false);

    const toggleModal = () => setIsShowModal(prev => !prev);

    // const handleClick = () => {
    //     toggleModal();
    //     dispatch(getCarById(id));
    // };

    return (
        <>
            <Item>
                <InfoWrap>
                    <FavoriteIcon width='18' height='18'
                        style={iconStyles}/>
                    <Image src={img} alt={make} loading="lazy" />
                    <TitleWrap>
                        <Title>{make} <Span>{model}, </Span>{year}</Title>
                        <p>{rentalPrice}</p>
                    </TitleWrap>
                    <DetailsList>
                        <DetailsItem>{address.split(',')[1]}</DetailsItem>
                        <DetailsItem>{address.split(',')[2]}</DetailsItem>
                        <DetailsItem>{rentalCompany}</DetailsItem>
                    </DetailsList>
                    <DetailsList>
                        <DetailsItem>{type}</DetailsItem>
                        <DetailsItem>{model}</DetailsItem>
                        <DetailsItem>{mileage}</DetailsItem>
                        <DetailsItem>{accessories[0]}</DetailsItem>
                    </DetailsList>
                </InfoWrap>
                <Button type='button' onClick={toggleModal} >
                Learn more
                </Button>
            </Item>
            {isShowModal &&
                <Modal onClose={toggleModal} carId={id}>
                    <img alt={make} src={img} />
                </Modal>
            }
        </>
    );
};