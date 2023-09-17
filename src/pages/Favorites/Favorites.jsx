import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { getAllCars } from "redux/operations";
import { resetFilter } from "redux/filtersSlice";
import { selectFavoriteCars, selectFiltredFavoriteCars, selectIsFiltred } from "redux/selectors";
import { CarsList } from "components/CarsList";
import { Filter } from "components/Filter";


const Favorites = () => {
    const dispatch = useDispatch();
    const isFiltred = useSelector(selectIsFiltred);
    const favorites = useSelector(selectFavoriteCars);
    const filtredFavorites = useSelector(selectFiltredFavoriteCars);

    useEffect(() => {
        dispatch(getAllCars());
        dispatch(resetFilter());
    }, [dispatch]);

    return (
        <main>
            <Helmet>
                <title>Favorites</title>
            </Helmet>
            <Filter/>
            <CarsList cars={ isFiltred ? filtredFavorites : favorites} />
        </main>
    )
};

export default Favorites;