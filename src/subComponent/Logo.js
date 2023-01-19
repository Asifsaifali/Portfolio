import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LogoComp = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.text};
  font-family: "Pacifico", cursive;

  cursor: pointer;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 1;
  text-decoration: none;

  @media only screen and (max-width: 600px) {
    font-size: 1.6rem;
    top: 10px;
    left: 1rem;
}
`;


const Logo = () => {
  return (
    
    <LogoComp to="/">
      <motion.div
       initial={{
        y:-200,
        transition:{type:'spring',duration:1,delay:1}
      }}
      animate={{
        y:0,
        transition:{type:'spring',duration:1.5,delay:1}
      }}
        whileHover={{ scale: 1.1}}
        whileTap={{scale:0.9}}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
       <Link to="/" className="link">AHussain</Link>
      </motion.div>
    </LogoComp>
    
  );
};

export default Logo;
