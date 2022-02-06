import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
//import { darkTheme } from '../components/Theme';

const Logo = styled(NavLink)`
display: inline-block;
font-family: 'Pacifico',cursive;
font-size: 1.5rem;
text-decoration: none;


position: fixed;
left: 2rem;
top: 2rem;
z-index: 5;
color: #fff;
text-shadow:
    0 0 6px rgba(202,228,225,0.92),
    0 0 30px rgba(202,228,225,0.34),
    0 0 12px rgba(255, 56, 46,0.52),
    0 0 21px rgba(255, 56, 46,0.92),
    0 0 34px rgba(255, 56, 46,0.78);
	animation: 1.5s Blazing infinite alternate linear;
}

@keyframes Blazing {
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
}
@media screen and (max-width: 950px){
  font-size: 1.1rem;
  top: 1rem;
  left: 1.3rem;
}
`

const LogoComponent = (props) => {
  return <Logo color={props.theme} to="/">
    Dumont Julien
  </Logo>;
};

export default LogoComponent;
