import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs';


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


const SocialIcons = () => {
  return <Icons>
    <div>
      <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://youtube.com"}}>
        <Github width={25} height={25} fill='currentColor'/>
      </NavLink>
    </div>
    <div>
      <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://youtube.com"}}>
        <Twitter width={25} height={25} fill='currentColor'/>
      </NavLink>
    </div>
    <div>
      <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://youtube.com"}}>
        <Facebook width={25} height={25} fill='currentColor'/>
      </NavLink>
    </div>
    <div>
      <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://youtube.com"}}>
        <YouTube width={25} height={25} fill='currentColor'/>
      </NavLink>
    </div>
  </Icons>;
};

export default SocialIcons;
