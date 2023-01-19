import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import {  lightTheme } from "./Theme";
import CicularBar from "./CicularBar";
import Image from "./Images/html.png";
import Image1 from "./Images/css.png";
import Image2 from "./Images/js.png";
import Image3 from "./Images/react.png";
import Image4 from "./Images/mongo.png";
import Image5 from "./Images/node.png";
import Image6 from "./Images/sql.png";
import PowerBtn from "../subComponent/Powerbutton"
// import ParticleComponent from "../subComponent/Particles/ParticleComponent";
import Bounce from 'react-reveal'
import { Player} from '@lottiefiles/react-lottie-player';
import LoadingAnimation from "../Loading/LoadingAnimation";
import Navbar from "./Navbar";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  

  @media only screen and (max-width: 600px) {
  width: 100%;
  height: 100%;
}
`;

const Container=styled.div`
width: 80vw;
height: 70vh;
position: absolute;
display: flex;

@media only screen and (max-width: 600px) {
  flex-direction: column;
}
`

const Main = styled.div`
  background-color: ${props=>props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 2rem 1rem;
  height: 60vh;
  width: 31vw;
  line-height: 1.5;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 7px 6px rgba(0, 0, 0, 0.22);

  &:hover {
    transition: all 1s linear;
    color: white;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
   
}

`;

const BOX2=styled.div`
  background-color: ${props=>props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 2rem 1rem;
  height: 60vh;
  width: 31vw;
  line-height: 1.5;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 7px 6px rgba(0, 0, 0, 0.22);
  &:hover {
    transition: all 1s linear;
    color: white;
  }

  @media only screen and (max-width: 600px) {
  width: 100%;
}
`

const Skills = ({ done }) => {

  const[Loading,setLoading]=useState(false)

  useEffect(()=>{
    setTimeout(()=>setLoading(true),2000)
  },[])

  return (
    <>
   {Loading===true?(
    <ThemeProvider theme={lightTheme}>
     <Box>
     <PowerBtn/>
     <Navbar/>
     {/* <ParticleComponent/> */}
     <Container>
     <Bounce left> 
     <Main>
       <motion.img
         whileHover={{
           scale: 1.1,
           
         }}
         whileTap={{ scale: 0.9 }}
         src={Image}
         alt=""
         style={{
           width: "74px",
           height: "75px",
           position: "absolute",
           cursor: "pointer",
         }}
       />
       <CicularBar done="50" />
       <br />
       <motion.img
         whileHover={{
           scale: 1.1,
         }}
         whileTap={{ scale: 0.9 }}
         src={Image1}
         alt=""
         style={{
           width: "103px",
           height: "105px",
           margin: "54px -14px",
           position: "absolute",
           cursor: "pointer",
         }}
       />
       <br />
       <br />
       <br />
       <CicularBar done="80" />
       <br />
       <br />
       <motion.img
         whileHover={{
           scale: 1.1,
         }}
         whileTap={{ scale: 0.9 }}
         src={Image2}
         alt=""
         style={{
           width: "100px",
           height: "103px",
           margin: "30px -16px",
           position: "absolute",
           cursor: "pointer",
         }}
       />
       <br />
       <br />
       <CicularBar done="45" />
       <motion.img
         whileHover={{
           scale: 1.1,      
         }}
         whileTap={{ scale: 0.9 }}
         src={Image3}
         alt=""
         style={{
           width: "77px",
           height: "76px",
           margin: "77px -3px",
           position: "absolute",
           cursor: "pointer",
         }}
       />
       <br />
       <br />
       <br />
       <br />
       <CicularBar done="60" />
     </Main>
     </Bounce>
     <Player
  autoplay
  loop
  src="https://assets9.lottiefiles.com/private_files/lf30_WdTEui.json"
  style={{ height: '300px', width: '300px' }}
>
  
</Player>
    <Bounce right>
     <BOX2>
       <motion.img 
         whileHover={{
           scale: 1.1,
         }}
         whileTap={{ scale: 0.9 }}
         src={Image4}
         alt=""
         style={{
           width: "112px",
           height: "118px",
           margin: "-14px -10px",
           position: "absolute",
           cursor: "pointer",
         }}
       />
       <br />
       <CicularBar done="30" />
       <motion.img
         whileHover={{
           scale: 1.1,              
         }}
         whileTap={{ scale: 0.9 }}
         src={Image5}
         alt=""
         style={{
           width: "100px",
           height: "102px",
           margin: "104px -1px",
           position: "absolute",
           cursor: "pointer",
         }}
       />
       <br />
       <br />
       <br />
       <br />
       <br />
       <CicularBar done="45" />
       <br />
       <motion.img
         whileHover={{
           scale: 1.1,
           
         }}
         whileTap={{ scale: 0.9 }}
         src={Image6}
         alt=""
         style={{
           width: "80px",
           height: "85px",
           margin: "74px 10px",
           position: "absolute",
           cursor: "pointer",
         }}
       />
       <br />
       <br />
       <br />
       <br />
       <CicularBar done="70" />
     </BOX2>
     </Bounce>     
     </Container> 
   </Box>
   </ThemeProvider>

   ):( <LoadingAnimation/>

   )}
      </>
  );
};

export default Skills;
