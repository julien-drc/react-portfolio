import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useMediaQuery from 'react-hook-media-query'
import {motion} from 'framer-motion'
import styled, { keyframes } from 'styled-components'
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { Peace } from './AllSvgs';
import Intro from './Intro';
import Navbar from './NavBar/Navbar';
import LogoComponent from '../subComponents/LogoComponent';


const MainContainer = styled.div`
width: 100vw;
height: 100vh;
overflow: hidden;
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.3)`};



position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif;
  font-weight: 500;
}
`

const Container = styled.div`

padding: 2rem;
`
const neon = keyframes`
0%{
                text-shadow:
                0 0 7px #fff,
                0 0 10px #fff,
                0 0 42px rgb(255, 56, 46),
                0 0 77px rgb(255, 56, 46),
            }
           50%{
                text-shadow:
                0 0 7px #fff,
                0 0 10px #fff,
                0 0 32px rgb(255, 56, 46),
                0 0 87px rgb(255, 56, 46),
            }
`

const Contact = styled(NavLink)`
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
color: #fff;
text-shadow:
    0 0 6px rgba(202,228,225,0.92),
    0 0 30px rgba(202,228,225,0.34),
    0 0 12px rgba(255, 56, 46,0.52),
    0 0 21px rgba(255, 56, 46,0.92),
    0 0 34px rgba(255, 56, 46,0.78);
	animation: 1.5s ${neon} infinite alternate linear;

@media screen and (max-width: 950px) {
  position: fixed;
  top: 95vh;
  right: 1rem;
}
}
`


const BLOG = styled(NavLink)`
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: translate(-50%, -50%);
writing-mode: vertical-rl;
text-orientation: upright;
text-decoration: none;
z-index: 1;
color: #fff;
text-shadow:
    0 0 6px rgba(202,228,225,0.92),
    0 0 30px rgba(202,228,225,0.34),
    0 0 12px rgba(255, 56, 46,0.52),
    0 0 21px rgba(255, 56, 46,0.92),
    0 0 34px rgba(255, 56, 46,0.78);
	animation: 1.5s ${neon} infinite alternate linear;
}
`

const WORK = styled(NavLink)`
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%);
writing-mode: vertical-rl;
text-orientation: upright;
text-decoration: none;
z-index: 1;
color: #fff;
text-shadow:
    0 0 6px rgba(202,228,225,0.92),
    0 0 30px rgba(202,228,225,0.34),
    0 0 12px rgba(255, 56, 46,0.52),
    0 0 21px rgba(255, 56, 46,0.92),
    0 0 34px rgba(255, 56, 46,0.78);
	animation: 1.5s ${neon} infinite alternate linear;
}
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
color: white;
text-decoration: none;
z-index: 1;
color: #fff;
text-shadow:
    0 0 6px rgba(202,228,225,0.92),
    0 0 30px rgba(202,228,225,0.34),
    0 0 12px rgba(255, 56, 46,0.52),
    0 0 21px rgba(255, 56, 46,0.92),
    0 0 34px rgba(255, 56, 46,0.78);
	animation: 1.5s ${neon} infinite alternate linear;
}
`
const SKILLS = styled(NavLink)`
color: white;
text-shadow: 1px 2px 3px
rgba(0,0,0, 0.5);
text-decoration: none;
z-index: 1;
color: #fff;
text-shadow:
    0 0 6px rgba(202,228,225,0.92),
    0 0 30px rgba(202,228,225,0.34),
    0 0 12px rgba(255, 56, 46,0.52),
    0 0 21px rgba(255, 56, 46,0.92),
    0 0 34px rgba(255, 56, 46,0.78);
	animation: 1.5s ${neon} infinite alternate linear;
}
`

const rotate = keyframes`
0% {
    transform: scale(0.6);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
  }

  50% {
    transform: scale(1);
    box-shadow: 0 0 0 4rem rgba(255, 82, 82, 0);
  }

  70% {
    transform: scale(1.1);
    box-shadow: 0 0 0 4.5rem rgba(255, 82, 82, 0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
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
text-align: center;
transition: all 1s ease;

&>:first-child{
  border-radius: 100px;
	animation: ${rotate} infinite 2s linear;
}

@media screen and (max-width: 950px) {
  left: ${props => props.click ? '50%' : '50%'};
  top: ${props => props.click ? '90%' : '50%'};
}
`


const Main = () => {
  const isSmallScreen = useMediaQuery("(min-width: 950px)");

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)

  return (
    <MainContainer>
      {isSmallScreen ? <Container>
        <LogoComponent/>
        <PowerButton/>
        <Center click={click}>
          <Peace onClick={()=> handleClick()} width={click ? 200 : 200} height={click ? 200 : 200 } fill='currentColor'/>
        </Center>

        <Contact target="_blank" to={{pathname:"mailto:juliendrc8@gmail.com"}}>
          <motion.h2
          initial={{
            y:-200,
            transition: { type:'spring', duration: 1.2, delay:1}
          }}
          animate={{
            y:0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          >
           ✉️ Contactez moi...
          </motion.h2>
        </Contact>

        <BLOG to="/blog">
          <motion.h2
          initial={{
            x:200,
            transition: { type:'spring', duration: 1.2, delay:1}
          }}
          animate={{
            x:0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          >
            Parcours
          </motion.h2>
        </BLOG>

        <WORK to="/work" click={click}>
          <motion.h2
          initial={{
            x:-200,
            transition: { type:'spring', duration: 1.2, delay:1}
          }}
          animate={{
            x:0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          >
            Travaux
          </motion.h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2
            initial={{
            y:200,
            transition: { type:'spring', duration: 1.2, delay:1}
          }}
          animate={{
            y:0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >
              A propos
            </motion.h2>
          </ABOUT>

          <SKILLS to="/skills">
            <motion.h2
            initial={{
            y:200,
            transition: { type:'spring', duration: 1.2, delay:1}
          }}
          animate={{
            y:0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >
              Competences
            </motion.h2>
          </SKILLS>
        </BottomBar>


      </Container> :
        <>
        <Navbar />
        <SocialIcons />
        <Center click={click}>
          <Peace onClick={() => handleClick()} width={click ? 100 : 200} height={click ? 100 : 200} fill='currentColor' />
        </Center>
        <Contact target="_blank" to={{pathname:"mailto:juliendrc8@gmail.com"}}>
          <motion.h2
          initial={{
            x:200,
            transition: { type:'spring', duration: 1.2, delay:1}
          }}
          animate={{
            x:0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          >
           ✉️
          </motion.h2>
        </Contact>
        </>}

      {click ? <Intro click={click}/> : null}
    </MainContainer>
  )
};

export default Main
