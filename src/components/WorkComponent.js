import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import './BlogComponent.css'



const Box = styled(motion(NavLink))`
width: calc(10rem + 15vw);
text-decoration: none;
height: 20rem;
padding: 1rem;
color: white;
border: 2px solid white;
backdrop-filter: blur(2px);
border-radius: 5px;
box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #FF382E,
            0 0 0.8rem #FF382E;
cursor: pointer;
word-break: break-word;

display: flex;
flex-direction: column;
z-index: 5;

&:hover {
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
  transition: all 0.3s ease;
}
`
const Caption = styled.figcaption`

`
const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 100%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;
background-position: center;
@media screen and (max-width: 950px) {
  height: 60%;
}

${Box}:hover &{
  border: 1px solid ${props => props.theme.body};
}
`
const Title = styled.h3`
color: inherit;
padding: 0.5rem 0;
padding-top: 1rem;
font-family: 'Karla', sans-serif;
border-bottom: 1px solid white;

${Box}:hover &{
  border-bottom: 1px solid ${props => props.theme.body};
}
`
const Describe = styled.div`
padding: 0.5rem 0;
`
const HashTags = styled.div`
padding: 0.5rem 0;
`
const Tag = styled.span`
padding-right: 0.5rem;
`
const Date = styled.span`
padding: 0.5rem 0;
`
const Container = styled(motion.div)``

const Item = {
  hidden:{
    scale:0
  },
  show:{
    scale:1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}


const WorkComponent = (props) => {
  const {name, tags, date, imgSrc, link, description} = props.work;
    const [isMobile, setIsMobile] = useState(window.innerWidth < 950);


  useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 950;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      }, false);
    }, [isMobile]);

  return <Container
  variants={Item}
  className={`${isMobile ? "" : "rec"}`}
  >
  <Box target="_blank" to={{pathname: link}}>
    <Image img={imgSrc} />
    <Caption>
    <Title>{name}</Title>
    <Describe>{description}</Describe>
    <HashTags>
      {
        tags.map((t,id) => {
          return <Tag key={id}>#{t}</Tag>
        })
      }
    </HashTags>
    <Date>
      {date}
    </Date>
    </Caption>
  </Box>
</Container>
};

export default WorkComponent;
