import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { CarsList } from "../../components/CarsList/CarsList";
import { selectIsLoading, selectError } from '../../redux/selectors';
import { Loader } from '../../components/Loader/Loader';
import { getAllCars } from '../../redux/operations';
import { toast } from 'react-hot-toast';
import { Button } from './Catalog.styled';
import { Filter } from 'components/Filter';


const Catalog = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const [page, setPage] = useState(1);


    useEffect(() => {
        dispatch(getAllCars(page));
    }, [dispatch, page]);  

    const handleLoadNoreClick = () => {
        setPage(page+1)
    }

    return (
        <main>
            {error && toast.error('Ooops!..Something went wro ng. Try to reload page')}
            {loading && !error && <Loader />}
            <Filter/>
            <CarsList />
            {page < 5 && !loading &&
                <Button onClick={handleLoadNoreClick}>Load more</Button>
            }
        </main>
    )
};

export default Catalog;