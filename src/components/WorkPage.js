import React, { useEffect, useState } from 'react';
import useMediaQuery from 'react-hook-media-query'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import {Work} from '../data/WorkData'
import WorkComponent from './WorkComponent';
import Kunai from '../subComponents/Kunai'
import Navbar from './NavBar/Navbar';



const MainContainer = styled(motion.div)`

`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.3)`};
width: 100%;
height: auto;
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
@media screen and (max-width: 950px) {
  grid-template-columns: 1fr;
}
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

  const isSmallScreen = useMediaQuery("(min-width: 950px)");

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
      {!isSmallScreen ? <Navbar></Navbar>: null}
      {isSmallScreen ? <LogoComponent/> : null}
      {isSmallScreen ? <PowerButton /> : null}
      <SocialIcons/>
      {isSmallScreen ? <Kunai numbers={numbers}/> : null}

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
