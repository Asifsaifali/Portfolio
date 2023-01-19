import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';

const Container=styled.div`
width: 100vw;
height: 100vh;
background-color: #FCF6F4;
`

const ResumeLoad = () => {
  return (
    
    <Container>
        <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_got51zql.json"
        style={{ height: '600px', width: '600px'}}
        >
        <Controls  buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
    </Container>
  )
}

export default ResumeLoad