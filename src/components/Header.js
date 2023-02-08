import React from "react";
import { motion } from "framer-motion";

import { MdEmail } from "react-icons/md";

import { IoMdContact, IoLogoLinkedin } from "react-icons/io";
import { RiGithubFill } from "react-icons/ri";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <div className='header-inner'>
        <div className='logo'>welcome!</div>
        
        <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className='scroll'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          <a className='github' href='https://hugolopez.me'> <IoMdContact/> </a>
          <a className='github' href='https://github.com/HugoLOPEZ64'> <RiGithubFill/> </a>  
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          <a className='linkedin' href='mailto:hugo.lopez002@gmail.com'> <MdEmail/> </a>
          <a className='linkedin' href='https://www.linkedin.com/in/hugolopez64/'> <IoLogoLinkedin/> </a>
        </motion.span>
      </motion.div>
        
      </div>
    </motion.div>
  );
};

export default Header;
