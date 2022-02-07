import React from 'react';
import useMediaQuery from 'react-hook-media-query'
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { darkTheme } from './Theme';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import fusée from '../assets/Images/Fusée.png'
import Navbar from './NavBar/Navbar';

const Box = styled.div`
background-color: ${props => props.theme.body}, 0.9;
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(-25px) translateX(25px)}
100% { transform: translateY(-10px) }
`
const Spaceman = styled.div`
position: absolute;
top: 20%;
right: 5%;
width: 30vw;
animation: ${float} 4s ease infinite;

img{
  width: 100%;
  height: auto;
}
`

const Main = styled.div`
border: 2px solid solid;
border-radius: 5px;
box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #FF382E,
            0 0 0.8rem #FF382E;
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);
position: absolute;
left: calc(5rem + 5vw);
top: 10rem;
font-family: 'Unbutu Mono', monospace;
font-style: italic;
@media screen and (max-width: 950px) {
  width: 55vw;
  left: 5rem;
}
`

const AboutPage = () => {

  const isSmallScreen = useMediaQuery("(min-width: 950px)");

  return (
  <ThemeProvider theme={darkTheme}>
    <Box>
      {!isSmallScreen ? <Navbar></Navbar>: null}
      {isSmallScreen ? <LogoComponent theme='dark'/> : null}
      <SocialIcons />
      {isSmallScreen ? <PowerButton />: null}
      <ParticleComponent theme='dark' />

      {isSmallScreen ?<Spaceman>
        <img src={fusée} alt="fusée"/>
      </Spaceman> : null}
      <Main>
        J'ai d'abord commencé à travailler dans le prêt à porter (Zara), où j'ai été employé durant 7 ans. J'ai été vendeur polyvalent, caissier, réserviste et responsable réserve, responsable rayon et enfin formateur. J'ai par la suite voulu me reconvertir vers un domaine qui me passionne depuis plusieurs années déjà, le domaine du web et plus précisément le développement. Depuis j'ai suivi quelques formations sur internet ainsi qu'un Bootcamp (le wagon). Je ne cesse de me passionner pour ce domaine en apprenant et découvrant tous les jours de nouvelles choses.
      </Main>
    </Box>
  </ThemeProvider>

  )
};

export default AboutPage
