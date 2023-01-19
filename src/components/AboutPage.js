import React, { useEffect, useState } from "react";
import { ThemeProvider, keyframes } from "styled-components";
import styled from "styled-components";
import { lightTheme } from "./Theme";
import Boy from "./Images/boy.png";
import Button from "../subComponent/Powerbutton";
import ParticleNew from "../subComponent/Particles/ParticleNew";
import { Zoom } from 'react-reveal'
import AboutLoad from "../Loading/AboutLoad";
import Navbar from "./Navbar";

const BOX = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  
@media only screen and (max-width: 600px){
     overflow: hidden;
     position: fixed;
     display: flex;
     align-items: center;
     justify-content: center;
    }
`;

const New = styled.div`
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 53vh;
  z-index: 0;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  cursor: pointer;
  background-color: #21D4FD;
  background-image: linear-gradient(19deg, #21D4FD 38%, #B721FF 100%);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

   
@media only screen and (max-width: 600px){
    position: fixed;
    }
  
@media only screen and (max-width: 768px) {
    width: 75vw;
    
    backdrop-filter: none;
    left:40px;
    font-size: 16px;
  }

`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;
const BOY = styled.div`
  position: absolute;
  top: 10%;
  right: 20%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
   
@media only screen and (max-width: 600px){
     display: none;
    }
`;


const AboutPage = () => {

  const[Loading,setLoading]=useState(false)

  useEffect(()=>{
    setTimeout(()=>setLoading(true),3000)
  },[])


  const mystyle = {
    width: "358px",
    height: "487px",
    margin: "74px 60px",
    cursor: "pointer",
  };

  return (
    <>
    {Loading===true?(
      <ThemeProvider theme={lightTheme}>
      <BOX>
      <Navbar/>
        <ParticleNew/>
        <Button />
        <New>
        <Zoom>
          I'm a front-end developer🙂. I love to create simple and beautiful
          websites with great user experience.Some of the languages which I used
          as a front-end developer are HTML CSS JAVASCRIPT REACT JS jQuery.
         
       
        <br/>

          I'm also a backend developer 😎 which build and maintain the mechanisms
          that process data and perform actions on websites.Back-end languages I
          used are Nodejs MongoDB SQL
          </Zoom>
        </New>
       
        <BOY>
          <img src={Boy} alt="" style={mystyle} />
        </BOY>  
      </BOX>
    </ThemeProvider>

    ):(<AboutLoad/>

    )}
    
    </>
  );
};

export default AboutPage;
