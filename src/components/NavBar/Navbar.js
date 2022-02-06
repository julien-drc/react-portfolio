import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../../assets/Images/Menu-white.png'
import "./Navbar.css"
import LogoComponent from '../../subComponents/LogoComponent';
import styled from 'styled-components';


const  Work = styled(NavLink)`
text-decoration: none;
color: #fff;
`
const  Blog = styled(NavLink)`
text-decoration: none;
color: #fff;
`
const  About = styled(NavLink)`
text-decoration: none;
color: #fff;
`
const  Skills = styled(NavLink)`
text-decoration: none;
color: #fff;
`
const JustDiv = styled.div`
width: 100%;
height: 50px;
background-color: black;
position: fixed;
z-index: 3;
`
export default function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }


  return (
    <nav>
      <JustDiv/>
      <LogoComponent />
      {toggleMenu && (
      <ul className="liste">
        <li className="items"> <Blog to="/blog">Parcours</Blog></li>
        <li className="items"><Work to="/work">Travaux</Work></li>
        <li className="items"><Skills to="/skills">Competences</Skills></li>
        <li className="items"><About to="/about">A propos</About></li>
      </ul>

      )}
      <img src={menu} alt="" onClick={toggleNav} className="btn"/>
    </nav>

  )
}
