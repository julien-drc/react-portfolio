import React, { useEffect, useState } from 'react';
import useMediaQuery from 'react-hook-media-query'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import {Blogs} from '../data/BlogData'
import BlogComponent from './BlogComponent';
import Anchor from '../subComponents/Anchor';
import {motion} from 'framer-motion'
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

const BlogPage = () => {


  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70)/30;
    setNumbers(parseInt(num))
  }, []);

  const isSmallScreen = useMediaQuery("(min-width: 950px)");

  return (<>

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
      {isSmallScreen ? <Anchor numbers={numbers}/> : null}

      <Center>
        <Grid>
          {
            Blogs.map(blog => {
              return <BlogComponent key={blog.id} blog={blog} />
            })
          }
        </Grid>
      </Center>
    </Container>
    </MainContainer>
  </>
  )
};

export default BlogPage
