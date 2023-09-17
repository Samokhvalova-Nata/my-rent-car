import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Description, ReasonSection, ReasonsItem, ReasonsList, ReasonsText, ReasonsTitle, ReasonsWrap, Section, Title } from "./Home.styled";
import { ReactComponent as CarIcon } from '../../images/car_rent.svg';
import { ReactComponent as SupportIcon } from '../../images/headset.svg';
import { ReactComponent as PriceIcon } from '../../images/price.svg';
import { ReactComponent as InsuranceIcon } from '../../images/insurance.svg'


const Home = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/catalog')
    }

    return (
        <main>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Section>
                <Title>Where Your Journey Begins!</Title>
                <Description>You can easily make a request and rent a car in Ukraine – just choose car in catalog and contact us. Do not miss the unique chance to inexpensively rent a car of the class you need!</Description>
                <Button onClick={handleStart}>Get started</Button>
            </Section>
            <ReasonSection>
                <ReasonsTitle>Reasons to rent a car with us</ReasonsTitle>
                <ReasonsList>
                    <ReasonsItem>
                        <ReasonsWrap>
                            <CarIcon width='76' height='76' />
                            <ReasonsText>All cars in good condition</ReasonsText>
                        </ReasonsWrap>
                    </ReasonsItem>
                    <ReasonsItem>
                        <ReasonsWrap>
                            <SupportIcon width='76' height='76' />
                            <ReasonsText>Support on the road</ReasonsText>
                        </ReasonsWrap>
                    </ReasonsItem>
                    <ReasonsItem>
                        <ReasonsWrap>
                            <PriceIcon width='76' height='76' />
                            <ReasonsText>Affordable prices</ReasonsText>
                        </ReasonsWrap>
                    </ReasonsItem>
                    <ReasonsItem>
                        <ReasonsWrap>
                            <InsuranceIcon width='76' height='76' />
                            <ReasonsText>Full insurance</ReasonsText>
                        </ReasonsWrap>
                    </ReasonsItem>
                </ReasonsList>
            </ReasonSection>
        </main>
    )
};

export default Home;