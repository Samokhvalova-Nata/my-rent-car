import { useNavigate } from 'react-router-dom';
import noResultsFound from '../../images/backgrounds/No_results_found.jpg';
import { Button, Container, Text } from './NoFavorites.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { Loader } from 'components/Loader';

export const NoFavorites = () => {
    const navigate = useNavigate();
    const loading = useSelector(selectIsLoading);

    return (
        <>
        {loading ? <Loader />
            : 
            <Container>
                <img src={noResultsFound} alt="No results found" width="400" />
                <Text>Sorry, you have no favorites. Go to catalog and choose cars you like</Text>
                <Button onClick={() => navigate('/catalog')}>See catalog</Button>
            </Container>
        }
        </>
    )
};