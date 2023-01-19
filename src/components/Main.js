import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { PowerBtn } from "./AllSvgs";
import Intro from "./Intro";
import { lightTheme } from "./Theme";
import HomeLoad from "../Loading/HomeLoad";
import Navbar from "./Navbar";

const Container=styled.div`
overflow: hidden;
width: 100vw;
height: 100vh;


@media only screen and (max-width: 600px) {
     width: 100%;
     height: 100%;
     overflow: hidden;
    }
`


const Main = () => {

  const[Loader,setLoader]=useState(false);

  useEffect(()=>{
    setTimeout(()=>setLoader(true),2000)
  },[])
  return (
    <>
    { Loader===true ?(
      <ThemeProvider theme={lightTheme}>
        <Container>
        <PowerBtn/>
        <Navbar/>
        <Intro/>
        </Container>
    </ThemeProvider>

    ):(<HomeLoad/>
  )}

</>
);
};

export default Main;
