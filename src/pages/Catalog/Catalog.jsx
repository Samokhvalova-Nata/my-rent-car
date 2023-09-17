import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { CarsList } from "../../components/CarsList/CarsList";
import { selectIsLoading, selectError, selectCars, selectFiltredCars } from '../../redux/selectors';
import { Loader } from '../../components/Loader/Loader';
import { getAllCars } from '../../redux/operations';
import { toast } from 'react-hot-toast';
import { Button } from './Catalog.styled';
import { Filter } from 'components/Filter';


const Catalog = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
    const filtredCars = useSelector(selectFiltredCars);
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const [page, setPage] = useState(1);
    const [isBtnShown, setIsBtnShown] = useState(true);

    const arrayForRender = filtredCars ? filtredCars : cars;

    useEffect(() => {
        dispatch(getAllCars(page));
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
            {error && toast.error('Ooops!..Something went wro ng. Try to reload page')}
            {loading && !error && <Loader />}
            <Filter/>
            <CarsList cars={arrayForRender} />
            {isBtnShown && !loading &&
                <Button onClick={handleLoadMoreClick}>Load more</Button>
            }
        </main>
    )
};

export default Catalog;