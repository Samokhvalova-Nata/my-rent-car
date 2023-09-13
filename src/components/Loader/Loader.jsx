import { ThreeDots } from 'react-loader-spinner';
import { Wrap } from './Loader.styled';

export const Loader = () => {
    return (
        <Wrap>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#3470FF"
                ariaLabel="three-dots-loading"
                visible={true}
            />
        </Wrap>
    )
};

export default Loader;