import * as React from "react";
import { motion } from "framer-motion";
import { Nav, Navbar, NavLink } from 'react-bootstrap';



const variants = {
  open: {
    y: 0,
    zIndex: 10,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    zIndex: 1,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  
  return (
    <NavLink href={i.url}>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        
        <div className="icon-placeholder" style={style}><img src={i.image} style={{width:'100%'}}/></div>
        <div className="text-placeholder" style={style}>{i.title}</div>
      </motion.li>
    </NavLink>
    
  );
};


