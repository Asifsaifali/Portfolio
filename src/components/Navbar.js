import React from 'react'
import  styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Theme'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Socialicons from "../subComponent/Socialicons";
import Logo from "../subComponent/Logo";



const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "karla", sans-sarif;
    font-weight: bold;
  }
  
@media only screen and (max-width: 600px) {
     width: 100%;
     height: 100%;
    
    }
`;

export const SKILL = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  color:black;
  font-weight:bold;

  @media only screen and (max-width: 600px) {
    right: 5px;
    font-size:12px;
    top: 50%;
    position: fixed;
}
`;
const RESUME = styled(NavLink)`
 

  color: ${(props) => props.theme.text};
  position: absolute;
  bottom: 1rem;
  right: 10rem;
  transform: rotate(0deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  color:black;
  font-weight:bold;
  
  @media only screen and (max-width: 600px) {
    right: 10rem;
    font-size: 12px;
    position: fixed;
    bottom: 0;
}
`;


const CONN = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 6%;
  right: 1rem;
  transform: rotate(0deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  color:black;
  font-weight:bold;

  @media only screen and (max-width: 600px) {
    right: -2rem;
    font-size: 12px;
    position: fixed;

}

`;

const ABOUT = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  bottom: 1rem;
  left: 20rem;
  transform: rotate(0deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  color:black;
  font-weight:bold;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    width: 100px;
    left: 15rem;
    bottom: 0;
    position: fixed;
}
  

`;
const PROJECTS = styled(NavLink)`
   color: ${(props) => props.theme.text};
  position: absolute;
  bottom: 1rem;
  left: 48rem;
  transform: rotate(0deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  color:black;
  font-weight:bold;
    
  @media only screen and (max-width: 600px) {
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  position: fixed;
  z-index: 1;
}

`

const Navbar = () => {
  return (
    <>
        <ThemeProvider theme={lightTheme}>
           <MainContainer>
            <Socialicons/>
            <Logo/>
        <SKILL to="/skill">
        <motion.h2
         initial={{
          y:-200,
          transition:{type:'spring',duration:1,delay:1}
        }}
        animate={{
          y:0,
          transition:{type:'spring',duration:1.5,delay:1}
        }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}         
      >Skills</motion.h2>
      </SKILL>
      <RESUME to="/resume">
          <motion.h2
           initial={{
            y:200,
            transition:{type:'spring',duration:1,delay:1}
          }}
          animate={{
            y:0,
            transition:{type:'spring',duration:1.5,delay:1}
          }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} 
          >Resume</motion.h2>
        </RESUME>

        <CONN to="/contact">
          <motion.h2
          initial={{
            y:-200,
            transition:{type:'spring',duration:1,delay:1}
          }}
          animate={{
            y:0,
            transition:{type:'spring',duration:1.5,delay:1}
          }}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             transition={{ type: "spring", stiffness: 400, damping: 10 }} 
          >Contact Us</motion.h2>
        </CONN>

        <ABOUT to="/about">
          <motion.h2
           initial={{
            y:200,
            transition:{type:'spring',duration:1,delay:1}
          }}
          animate={{
            y:0,
            transition:{type:'spring',duration:1.5,delay:1}
          }}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             transition={{ type: "spring", stiffness: 400, damping: 10 }} 
          >About Me.</motion.h2>
        </ABOUT>

        <PROJECTS to="/work">
          <motion.h2
           initial={{
            y:200,
            transition:{type:'spring',duration:1,delay:1}
          }}
          animate={{
            y:0,
            transition:{type:'spring',duration:1.5,delay:1}
          }}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             transition={{ type: "spring", stiffness: 400, damping: 10 }} 
          >My Projects</motion.h2>
        </PROJECTS>
      </MainContainer> 
      </ThemeProvider>
      </>
  )
}

export default Navbar