import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion'
import Me from '../assets/Images/Me.jpg'



const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 65vw;
height: 55vh;
display: flex;
background-color: rgba(255, 255, 255, 0.1);
border: 1px solid white;
box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #FF382E,
            0 0 0.8rem #FF382E;
border-radius: 0.5rem;
background-repeat: no-repeat;
background-size: 100% 2px;
z-index: 1;
@media screen and (max-width: 950px) {
  transform: translate(-50%, -50%);
}
`


const SubBox = styled.div`
width: auto;
position: relative;
display: flex;
align-items: center;
padding: 2rem;
.pic{
  position: relative;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.6)
}
@media screen and (max-width: 950px) {
  text-align: center;
  align-content: space-between;
  flex-direction: column-reverse;
  padding: 1%;
  margin: auto;
  .pic {
    width: 11rem;
    height: 11rem;
  }
}
`
const Text = styled(motion.div)`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
  color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
  font-size: calc(0.6rem + 1.5vw);
  font-weight: 300;
}
@media screen and (max-width: 950px) {
  padding-top: 10%;
  font-size: 1.7rem;
}
`

const Intro = () => {
  return <Box
  initial={{height:0}}
  animate={{height: '55vh'}}
  transition={{ type: 'spring', duration:2, delay:1 }}
  >
    <SubBox>
        <Text
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
        >
          <p>Salut,</p>
          <p>Bienvenue sur mon portfolio,</p>
          <p>Je m'appelle Julien et je suis développeur fullstack junior.</p>
        </Text>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
        >
          <img className="pic" src={Me} alt=""/>
        </motion.div>
    </SubBox>
  </Box>;
};

export default Intro;
