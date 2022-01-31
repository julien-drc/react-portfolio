import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { YinYang } from './AllSvgs';


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif;
  font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: translate(-50%, -50%);
writing-mode: vertical-rl;
text-orientation: upright;
text-decoration: none;
z-index: 1;
`

const WORK = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%);
writing-mode: vertical-rl;
text-orientation: upright;
text-decoration: none;
z-index: 1;
`
const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&>:first-child{
  animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
  padding-top: 1rem;
}
`

const Main = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)

  return (
    <MainContainer>
      <Container>
        <PowerButton/>
        <LogoComponent/>
        <SocialIcons/>
        <Center click={click}>
          <YinYang onClick={()=> handleClick()} width={150} height={150} fill='currentColor'/>
          <span>Cliquez ici</span>
        </Center>

        <Contact target="_blank" to={{pathname:"mailto:juliendrc8@gmail.com"}}>
          <h2>Contactez moi...</h2>
        </Contact>

        <BLOG to="/blog">
          <h2>Blog</h2>
        </BLOG>

        <WORK to="/work">
          <h2>Work</h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about">
            <h2>About</h2>
          </ABOUT>

          <SKILLS to="/skills">
            <h2>Competences</h2>
          </SKILLS>
        </BottomBar>

      </Container>
    </MainContainer>
  )
};

export default Main