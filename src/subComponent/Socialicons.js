import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, Facebook, Twitter } from "../components/AllSvgs";
import { motion } from "framer-motion";

const Lines = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};

 
@media only screen and (max-width: 600px) {
     height: 2rem;
    }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  @media only screen and (max-width: 600px) {
    left: 0.5rem;
    bottom: 0rem;
    width: 20px;
    height: 200px;
  }
`;

const Socialicons = (props) => {
  return (
    <Logo>
      <motion.div
      initial={{
        x:-200,
        transition:{type:'spring',duration:1,delay:1}
      }}
      animate={{
        x:0,
        transition:{type:'spring',duration:1.5,delay:1}
      }}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.9 }}
      >
        <NavLink target="_blank" to={{ pathname: "" }}>
          <Github width={25} height={25} fill="currrentColor" />
        </NavLink>
      </motion.div>

      <motion.div
      initial={{
        x:-200,
        transition:{type:'spring',duration:1,delay:1}
      }}
      animate={{
        x:0,
        transition:{type:'spring',duration:1.5,delay:1}
      }}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.9 }}
      >
        <NavLink
          target="_blank"
          to={{ pathname: "https://www.facebook.com/profile.php" }}
        >
          <Facebook width={25} height={25} fill="currrentColor" />
        </NavLink>
      </motion.div>
      <motion.div
      initial={{
        x:-200,
        transition:{type:'spring',duration:1,delay:1}
      }}
      animate={{
        x:0,
        transition:{type:'spring',duration:1.5,delay:1}
      }}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.9 }}
      >
        <NavLink target="_blank" to={{ pathname: "" }}>
          <Twitter width={25} height={25} fill="currrentColor" />
        </NavLink>
      </motion.div>
      <Lines
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 1,
        }}
      />
    </Logo>
  );
};

export default Socialicons;
