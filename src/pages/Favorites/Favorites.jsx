import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { selectFavoriteCars } from "redux/selectors";
import { CarsList } from "components/CarsList";
import { Filter } from "components/Filter";

const Favorites = () => {
    const favorites = useSelector(selectFavoriteCars);

// TODO Update filter logic

    return (
        <main>
            <Helmet>
                <title>Favorites</title>
            </Helmet>
            <Filter/>
            <CarsList cars={favorites} />
        </main>
    )
};

export default Favorites;