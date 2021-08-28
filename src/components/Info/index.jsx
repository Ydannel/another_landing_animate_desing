import { Button } from 'react-scroll'
import {Container, Wrapper, InfoRow, Column1, Text, TopLine, Heading, Subtitle, BtnWrap} from './styles'

const Information = () => {
    return ( 
        <Container id={id}>
            <Wrapper>
                <InfoRow>
                    <Column1>
                        <Text>
                            <TopLine></TopLine>
                            <Heading></Heading>
                            <Subtitle></Subtitle>
                            <BtnWrap>
                                <Button to='home'></Button>
                            </BtnWrap>
                        </Text>
                    </Column1>
                </InfoRow>
            </Wrapper>
        </Container>
     );
}
 
export default Information;