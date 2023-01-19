import React from 'react'
import styled from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'
import {motion} from 'framer-motion'

const Box=styled.h1`

background-color:transparent;
width: 42vw;
height: 35vh;
left:9rem;
top:10rem;
position: absolute;
display: flex;
font-family:'Source Sans Pro',sans-sarif;
font-size: 2rem;
cursor: pointer;
color: #03dac6;
z-index: 3;

&:hover{
  
  color: #ff0266;
  transition: all 1s ease;
}


@media only screen and (max-width: 600px) {
  width: 100%;
  height: 100px;
 left: 1rem;
 font-size: 15px;
 font-family: cursive;
  }
`

const Intro = () => {

  return (
    <Box>  
        <motion.h1 style={{letterspacing: '3px',}}
         initial={{
          x:-550,
          transition:{type:'spring',duration:1,delay:1}
        }}
        animate={{
          x:0,
          transition:{type:'spring',duration:1.5,delay:1}
        }} 
        
        >
        Hi,
        <br/>
        <h5>I'm Asif Hussain</h5>
       
       <br/>
        
        <span style={{color:'red',fontFamily:'cursive',fontWeight:'none'}}>
        <Typewriter
            words={['A Beginner', 'Frontend Developer', 'Backend Developer', 'M E R N Stack']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
        </motion.h1>
    </Box>
  )
}

export default Intro