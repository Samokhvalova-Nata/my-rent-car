import { useSelector } from "react-redux";
import { selectFavoriteCars } from "redux/selectors";
import { CarsList } from "components/CarsList";

const Favorites = () => {
    const favorites = useSelector(selectFavoriteCars);

    console.log('favorites on page', favorites)

    return (
        <main>
            <CarsList cars={favorites} />
        </main>
    )
};

export default Favorites;