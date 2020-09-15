import * as React from "react";
import { motion } from "framer-motion";
import { Nav, Navbar, NavLink } from 'react-bootstrap';

import home from './home.svg';
import history from './history.svg';
import projects from './projects.svg';
import passions from './passions.svg';
import contact from './contact.svg';
import fourohfour from './404.svg';





const colors = [home,history,projects,passions,contact,fourohfour];


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
  const style = {};
  
  return (
    <NavLink href={i.url} style={{color:"#000000"}} >
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        
        <div className="icon-placeholder" style={style}><img src={colors[i.number-1]} style={{width:'25px' }}/></div>
        <div className="text-placeholder" style={style}>{i.title}</div>
        
      </motion.li>
    </NavLink>
    
  );
};


