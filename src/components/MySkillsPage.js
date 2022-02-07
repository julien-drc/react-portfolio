import React from 'react';
import useMediaQuery from 'react-hook-media-query'
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Theme';
import { Iceberg, Computer } from './AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import Navbar from './NavBar/Navbar';

const Box = styled.div`
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Contente = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
@media screen and (max-width: 950px) {
  grid-template-columns: 1fr;
}
`

const Main = styled.div`
border: 2px solid white;
border-radius: 5px;
box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #FF382E,
            0 0 0.8rem #FF382E;
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 1;
line-height: 1.5;
font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}
@media screen and (max-width: 950px) {
  height: 40vh;
  width: 65vw;
  padding: 0;
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
  &>*{
    fill: ${props => props.theme.body};
  }
}

&>*:first-child{
  margin-right: 1rem;
}
@media screen and (max-width: 950px) {
  padding: 1rem;
}

`
const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;

${Main}:hover &{
  color: ${props => props.theme.body};
}

strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
}
ul,p{
  margin-left: 2rem;
}
@media screen and (max-width: 950px) {
  padding: 1rem;
}
`

const MySkillsPage = () => {

  const isSmallScreen = useMediaQuery("(min-width: 950px)");
  return (
  <ThemeProvider theme={lightTheme}>
    {!isSmallScreen ? <Navbar></Navbar>: null}
    {isSmallScreen ? <LogoComponent theme='dark'/> : null}
      <SocialIcons />
      {isSmallScreen ? <PowerButton />: null}
      <ParticleComponent theme='light' />
    <Box>
      <Contente>
      <Main>
        <Title>
          <Iceberg width={40} height={40} /> Frontend Développeur
        </Title>
        <Description>
          <h3>J'utilise:</h3>
          <p>Html, Css, Javascript, React, VueJs, Bootstrap, Materialize, Sass</p>
        </Description>
        <Description>
          <h3>Outils:</h3>
          <p>VsCode, Github, CodePen</p>
        </Description>
      </Main>

      <Main>
        <Title>
          <Computer width={40} height={40} /> Backend Développeur
        </Title>
        <Description>
          <h3>J'utilise:</h3>
          <p>NodeJs, Express, RubyOnRails, MongoDb, MySql, ActiveReccord</p>
        </Description>
        <Description>
          <h3>Outils:</h3>
          <p>Cloudinary, Heroku, Terminal</p>
        </Description>
      </Main>
      </Contente>
    </Box>
  </ThemeProvider>

  )
};

export default MySkillsPage
