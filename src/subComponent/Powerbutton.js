import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {  PowerBtn } from '../components/AllSvgs'

const Power=styled.button`
position:fixed;
top:2rem;
left:50%;
transform:translate(-50%,0);
background-color:${props=>props.theme.body};
padding:0.3rem;
border-radius:50%;
border:1px solid #000;
width:2.5rem;
height:2.5rem;
display:flex;
justify-content:center;
align-items: center;
z-index:3;
cursor:pointer;

@media only screen and (max-width: 600px) {
    display: none;
  }

&:hover{

  box-shadow:0 0 8px black;
  transition: all 1s linear;

  &>*:first-child{
    text-decoration:none;
    color:inherit;
  }
}
`

const Powerbutton = () => {
  return (
    <Power>
      <NavLink to="/">
      <PowerBtn width={30} height={30}/>
      </NavLink>
    </Power>
  )
}

export default Powerbutton