import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import {motion} from 'framer-motion'
import img from '../assets/Images/Backgound-black.jpeg'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import {Work} from '../data/WorkData'
import WorkComponent from './WorkComponent';
import Kunai from '../subComponents/Kunai'



const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.4)`};
width: 100%;
height: 100vh;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid =styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`
const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
}

const WorkPage = () => {

  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70)/30;
    setNumbers(parseInt(num))
  }, []);

  return (
  <MainContainer
  variants={container}
  initial='hidden'
  animate='show'
  exit={{
    opacity:0, transition:{duration: 0.5}
  }}
  >
    <Container>
      <LogoComponent/>
      <PowerButton />
      <SocialIcons/>
      <Kunai numbers={numbers}/>

      <Center>
        <Grid>
          {
            Work.map(work => {
              return <WorkComponent key={work.id} work={work} />
            })
          }
        </Grid>
      </Center>
    </Container>
  </MainContainer>
  )
};

export default WorkPage
