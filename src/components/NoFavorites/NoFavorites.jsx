import { useNavigate } from 'react-router-dom';
import noResultsFound from '../../images/No_results_found.jpg';
import { Button, Container, Text } from './NoFavorites.styled';

export const NoFavorites = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <img src={noResultsFound} alt="No results found" width="400" />
            <Text>Sorry, you have no favorites. Go to catalog and choose cars you like</Text>
            <Button
            onClick={() => navigate('/catalog')}
            >See catalog</Button>
        </Container>
    )

};