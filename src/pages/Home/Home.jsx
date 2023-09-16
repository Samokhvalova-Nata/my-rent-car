import { useNavigate } from "react-router-dom";
import { Button, Description, Section, Title } from "./Home.styled";


const Home = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/catalog')
    }

    return (
        <main>
            <Section>
                <Title>Where Your Journey Begins!</Title>
                <Description>You can easily make a request and rent a car in Ukraine – just choose car in catalog and contact us. Do not miss the unique chance to inexpensively rent a car of the class you need!</Description>
                <Button onClick={handleStart}>Get started</Button>
            </Section>
            
        </main>
    )
};

export default Home;