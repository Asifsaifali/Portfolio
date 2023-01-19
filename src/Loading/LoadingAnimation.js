import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';

const Container=styled.div`
width: 100vw;
height: 100vh;
background-color: #FCF6F4;
    @media only screen and (max-width: 600px) {
     width: 100%;
     height: 100%;
    }
`


const Loading = () => {
  return (

    <Container>
    <Player
    autoplay
    loop
    src="https://assets3.lottiefiles.com/packages/lf20_xcnrf6ap.json"
    style={{ height: '600px', width: '600px'}}
  >
    <Controls  buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
    </Container>
  )
}

export default Loading