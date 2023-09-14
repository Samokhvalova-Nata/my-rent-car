import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { CarsList } from "../../components/CarsList/CarsList";
// import { Title } from "./Catalog.styled";
import { selectIsLoading, selectError } from '../../redux/selectors';
import { Loader } from '../../components/Loader/Loader';
import { getAllCars } from '../../redux/operations';
import { toast } from 'react-hot-toast';
import { Button } from './Catalog.styled';


const Catalog = () => {
    const dispatch = useDispatch();
    const operation = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const [page, setPage] = useState(1);

    // useEffect(() => {
    //     dispatch(getAllCars());
    // }, [dispatch]);    
    
    useEffect(() => {
        dispatch(getAllCars(page));
    }, [dispatch, page]);  

    const handleLoadNoreClick = () => {
        setPage(page+1)
    }

    return (
        <main>
            {error && toast.error('Ooops!..Something went wro ng. Try to reload page')}
            {operation === 'getAll' && !error && <Loader />}
            <CarsList />
            {page < 5
                // ? (toast.success('You have seen all cars'))
                && <Button onClick={handleLoadNoreClick}>Load more</Button>
                }
            
        </main>
    )
    // TODO Add  filter
};

export default Catalog;