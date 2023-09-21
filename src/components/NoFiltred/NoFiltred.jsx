import { useDispatch } from 'react-redux';
import noResultsFound from '../../images/No_results_found.jpg';
import { Button, Container, Text } from './NoFiltred.styled';
import { resetFilter } from 'redux/filtersSlice';

export const NoFiltred = () => {
    const dispatch = useDispatch();

    return (
        <Container>
            <img src={noResultsFound} alt="No results found" width="400" />
            <Text>Sorry, there are no results. Try to search something else</Text>
            <Button
                onClick={() => dispatch(resetFilter())
                }
            >Reset filters</Button>
        </Container>
    )

};