import React from 'react'
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';


const Container=styled.div`
 background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "karla", sans-sarif;
    font-weight: 500;
  }

   
@media only screen and (max-width: 768px) {
  display: none;

}


`

const CartoonBackground = () => {
  return (
    <Container>
    <Spline  scene="https://prod.spline.design/qOMF8E7fvujrmOWB/scene.splinecode" />
    </Container>
  )
}

export default CartoonBackground