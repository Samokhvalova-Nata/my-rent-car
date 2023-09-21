import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from "react-helmet";
import { toast } from 'react-hot-toast';
import { resetFilter } from 'redux/filtersSlice';
import { getCarsByPage } from 'redux/operations';
import { selectIsLoading, selectError, selectCars, selectFiltredCars, selectIsFiltred } from 'redux/selectors';
import { CarsList } from 'components/CarsList';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader';
import { Button } from './Catalog.styled';
import { NoFiltred } from 'components/NoFiltred';


const Catalog = () => {
    const [page, setPage] = useState(1);
    const [isBtnShown, setIsBtnShown] = useState(true);
    const cars = useSelector(selectCars);
    const error = useSelector(selectError);
    const loading = useSelector(selectIsLoading);
    const isFiltred = useSelector(selectIsFiltred);
    const filtredCars = useSelector(selectFiltredCars);
    const dispatch = useDispatch();

    const arrayForRender = filtredCars ? filtredCars : cars;

    useEffect(() => {
        dispatch(getCarsByPage(page));
        dispatch(resetFilter());
    }, [dispatch, page]); 

    useEffect(() => {
        if (arrayForRender.length === 36) {
            setIsBtnShown(false)
        }
    },[arrayForRender.length])

    const handleLoadMoreClick = () => {
        setPage(page => page + 1)
    };

    return (
        <main>
            <Helmet>
                <title>Catalog</title>
            </Helmet>
            {error && toast.error('Ooops!..Something went wrong. Try to reload page')}
            {loading && !error && <Loader />}
            <Filter/>
            <CarsList cars={isFiltred ? filtredCars : cars} />
            {isFiltred && filtredCars?.length === 0 && <NoFiltred/>}
            {isBtnShown && !loading && !isFiltred &&
                <Button onClick={handleLoadMoreClick}>Load more</Button>
            }
            
        </main>
    )
};

export default Catalog;