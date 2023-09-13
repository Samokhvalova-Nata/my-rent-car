import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CarsList } from "../../components/CarsList/CarsList";
// import { Title } from "./Catalog.styled";
import { selectIsLoading, selectError } from '../../redux/selectors';
import { Loader } from '../../components/Loader/Loader';
import { getAllCars } from '../../redux/operations';
import { toast } from 'react-hot-toast';


const Catalog = () => {
    const dispatch = useDispatch();
    const operation = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(getAllCars());
    }, [dispatch]);    
    

    return (
        <main>
            {error && toast.error('Ooops!..Something went wrong. Try to reload page')}
            {operation === 'getAll' && !error && <Loader />}
            <CarsList />
            
        </main>
    )
    // TODO Add Loadmore btn, filter
};

export default Catalog;