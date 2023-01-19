import React, { useEffect, useState } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import Logo from "../subComponent/Logo";
import Socialicons from "../subComponent/Socialicons";
import { lightTheme } from "./Theme";
//import Spaceman from "./Images/Spaceman1.png";
import "./Resume.css";
import Powerbutton from "../subComponent/Powerbutton";
import Animation from "./Animation";
import ResumeLoad from "../Loading/ResumeLoad";
import Navbar from "./Navbar";

const BOX = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  font-family: "karla", sans-sarif;
`;
const MAIN = styled.div`
  width: 34vw;
  height: 32vh;
  margin-right: 250px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 7px 6px rgba(0, 0, 0, 0.22);
  font-family: "Ubuntu Mono", monospace;
  font-weight: none;
  text-align: center;
  position: absolute;
`;
const float = keyframes`
0% { transform: translateY(-10px) };
50% { transform: translateY(20px) translateX(20px) };
100% { transform: translateY(-10px) };
`;
const Spaceboy = styled.div`
  position: absolute;
  top: 10%;
  right: 20%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Resume = () => {
  
  const[Loading,setLoading]=useState(false)
  useEffect(()=>{
    setTimeout(()=>setLoading(true),2000)
  },[])

  return (
    <>
   {Loading===true?(
       <ThemeProvider theme={lightTheme}>
       <BOX>
         <Logo />
         <Socialicons />
         <Powerbutton />
         <Navbar/>
         <MAIN>
          <h1>Want My Resume😁</h1>
          <br></br>
          <h1>👇</h1>
          <a href="lol.pdf" download="lol lol.pdf">
            <button class="custom-btn btn-12">
              <span>Download</span>
              <span>Resume</span>
            </button>
          </a>
        </MAIN>
         <Spaceboy>
           <Animation/>
         </Spaceboy>
            
       </BOX>
     </ThemeProvider>
   ):<ResumeLoad/>
   }
   
    </>
  );
};

export default Resume;
