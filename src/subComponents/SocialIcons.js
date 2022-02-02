import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook, Github, Instagram, LinkedIn } from '../components/AllSvgs';
import { darkTheme } from '../components/Theme';
import {motion} from 'framer-motion'


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 2rem;
left: 2rem;

z-index:3;

&>*:not(:last-child){
  margin: 0.5rem 0
}
`


const SocialIcons = (props) => {
  return <Icons>
    <motion.div
    initial={{transform:"scale(0"}}
    animate={{scale:[0,1,1.5,1]}}
    transition={{type:'spring', duration:1, delay:1}}
    whileHover={{scale: 1.5}}
    whileTap={{scale: 1.2}}
    >
      <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/julien-drc"}}>
        <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
      </NavLink>
    </motion.div>
    <motion.div
    initial={{transform:"scale(0"}}
    animate={{scale:[0,1,1.5,1]}}
    transition={{type:'spring', duration:1, delay:1.2}}
    whileHover={{scale: 1.5}}
    whileTap={{scale: 1.2}}
    >
      <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.instagram.com/jlav_drc/?hl=fr"}}>
        <Instagram width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
      </NavLink>
    </motion.div>
    <motion.div
    initial={{transform:"scale(0"}}
    animate={{scale:[0,1,1.5,1]}}
    transition={{type:'spring', duration:1, delay:1.4}}
    whileHover={{scale: 1.5}}
    whileTap={{scale: 1.2}}
    >
      <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.facebook.com/julien.mcfly.5/"}}>
        <Facebook width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
      </NavLink>
    </motion.div>
    <motion.div
    initial={{transform:"scale(0"}}
    animate={{scale:[0,1,1.5,1]}}
    transition={{type:'spring', duration:1, delay:1.6}}
    whileHover={{scale: 1.5}}
    whileTap={{scale: 1.2}}
    >
      <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.linkedin.com/in/juliendrc8/"}}>
        <LinkedIn width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
      </NavLink>
    </motion.div>
  </Icons>;
};

export default SocialIcons;
