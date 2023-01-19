import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';

const Container=styled.div`
width: 100vw;
height: 100vh;
background-color: #fff;
align-items: center;
justify-content: center;


@media only screen and (max-width: 600px){
     width: 100%;
     height: 100%;
    }

`
const AboutLoad = () => {
  return (
    <Container>
    <Player
    autoplay
    loop
    src="https://assets2.lottiefiles.com/packages/lf20_ppp8a6ob.json"
    style={{ height: '750px', width: '750px'}}
  >
    <Controls  buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
    </Container>
  )
}

export default AboutLoad