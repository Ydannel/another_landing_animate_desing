import {Container, HeroBg, VideoBg, HeroContent, Text, Title, HeroBtnWrapper, ArrowForward, ArrowRight} from './styles';
import {Button} from '../Button';
import Video from '../../videos/1.mp4';
import { useState } from 'react';

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
    return ( 
        <Container>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <Title> A new world, a fantasy adventure</Title>
                <Text>
                     Sing up for a new account and join a our fantsy world
                 </Text>
                 <HeroBtnWrapper>
                     <Button to='singup' onMouseEnter={onHover} onMouseLeave={onHover}>
                         Get Started 
                         {hover? <ArrowForward/> : <ArrowRight/>}
                         </Button>
                 </HeroBtnWrapper>
            </HeroContent>
        </Container>
     );
}
 
export default Hero;