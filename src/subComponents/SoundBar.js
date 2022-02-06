import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import music from '../assets/audio/Chill.mp4'
import { Pause, Play } from '../components/AllSvgs';



const Box = styled.div`
width: auto;
cursor: pointer;
position: fixed;
left: 8rem;
top: 2rem;
z-index: 4;
padding-left: 9rem;

@media screen and (max-width: 950px){
  font-size: 1.1rem;
  top: 1rem;
  left: 4rem;
  right: 50%;
`

const Line = styled.div`

height: 1.5rem;
width: 1.5rem;
margin: 0 0.1rem;


`

const SoundBar = () => {

  const ref = useRef(null)
  const [click, setClick] = useState(false)

  const handleClick = () => {
    let el = ref.current
    setClick(!click);

    if(!click){
      el.play();
    } else {
      el.pause();
    }
  }

  return <Box onClick={() => handleClick()}>
    <Line>
    {click ? <Pause click={click}/> : <Play/>}
    </Line>
    <audio src={music} ref={ref} loop ></audio>
  </Box>;
};

export default SoundBar;
