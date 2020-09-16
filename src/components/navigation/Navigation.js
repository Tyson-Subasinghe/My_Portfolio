import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem.js";
import navList from "../../assets/data/navigationList.js";

const variants = {
  open: { opacity:1, zIndex: 5, pointerEvents: "auto",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {opacity:0, zIndex:1, pointerEvents: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
    
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {navList.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);


