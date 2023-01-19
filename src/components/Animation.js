import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';


const Animation = () => {
  return (
    <Player
    autoplay
    loop
    src="https://assets2.lottiefiles.com/packages/lf20_lrw0segg.json"
    style={{ height: '300px', width: '300px' }}
  >
<Controls  buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>

  )
}

export default Animation