import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ReactComponent as CarIcon } from '../../images/car_rent.svg';
import { ReactComponent as SupportIcon } from '../../images/headset.svg';
import { ReactComponent as PriceIcon } from '../../images/price.svg';
import { ReactComponent as InsuranceIcon } from '../../images/insurance.svg'
import { AdvantagesItem, AdvantagesList, AdvantagesSection, AdvantagesText, Button, Description, ReasonSection, ReasonsItem, ReasonsList, ReasonsText, ReasonsTitle, ReasonsWrap, SectionHero, Title } from "./Home.styled";

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
            <SectionHero>
                <Title>Where Your Journey Begins!</Title>
                <Description>You can easily make a request and rent a car in Ukraine – just choose car in catalog and contact us. Do not miss the unique chance to inexpensively rent a car of the class you need!</Description>
                <Button onClick={handleStart}>Get started</Button>
            </SectionHero>
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
            <AdvantagesSection>
                <ReasonsTitle>Our advantages</ReasonsTitle>
                <AdvantagesText>
                    In matters of cooperation with a client, we adhere the principles of partnership, which provides a lot of advantages. Concluding a car rental agreement with our company, you can be sure that:
                </AdvantagesText>
                <AdvantagesList>
                    <AdvantagesItem>
                        each car is fully serviceable, regularly undergoes scheduled inspection;
                    </AdvantagesItem>
                    <AdvantagesItem>all vehicles are insured;</AdvantagesItem>
                    <AdvantagesItem>we will provide a refilled car;</AdvantagesItem>
                    <AdvantagesItem>a car will be delivered clean, and it is not necessary to wash it before return;</AdvantagesItem>
                    <AdvantagesItem>if necessary, you will be provided with additional equipment, such as a child seat or a GPS navigator;</AdvantagesItem>
                    <AdvantagesItem>round-the-clock technical support service will always be in touch, wherever you are;</AdvantagesItem>
                    <AdvantagesItem>you will be required to pay only the amount indicated in the contract. Additional commissions and other hidden payments are excluded.</AdvantagesItem>
                </AdvantagesList>
                <AdvantagesText>
                    Renting a car with us is advantageous, comfortable and safe. Try our services and just be sure of it!
                </AdvantagesText>
            </AdvantagesSection>
        </main>
    )
};

export default Home;