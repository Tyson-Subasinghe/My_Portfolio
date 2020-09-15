import * as React from "react";
import { motion } from "framer-motion";
import { Nav, Navbar, NavLink } from 'react-bootstrap';

import home from '../../assets/home.svg';
import history from '../../assets/history.svg';
import projects from '../../assets/projects.svg';
import passions from '../../assets/passions.svg';
import contact from '../../assets/contact.svg';
import fourohfour from '../../assets/404.svg';





const icons = [home,history,projects,passions,contact,fourohfour];


const variants = {
  open: {
    width: 200,
    y: 0,
    zIndex: 100,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    zIndex: 10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export const MenuItem = ({ i }) => {
  

  
  return (
    <NavLink href={i.url} style={{color:"#000000"}} >
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        
        <div className="icon-placeholder" ><img src={icons[i.number-1]} style={{width:'25px' }}/></div>
        <div className="text-placeholder" style={{fontFamily: "ITCAvantGardeStd"}}>{i.title}</div>
        
      </motion.li>
    </NavLink>
    
  );
};


