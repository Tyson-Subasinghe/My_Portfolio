import React from 'react';
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./styles.css";
import {FloatInAnimation} from './components/FloatInAnimation';






export const About = () => {
    
    const [selectedId, setSelectedId] = useState(null)
    
    return(

        <div>

            
            
            <FloatInAnimation duration={1.5} initialOpacity={0} finalOpacity={1}>
                <h1>Professional History</h1>
            </FloatInAnimation>

            <FloatInAnimation duration={2} initialOpacity={0} finalOpacity={1}>

                <AnimateSharedLayout>

                    <motion.ul layout initial={{ borderRadius: 25 }}>
                        {items.map(item => (
                        <Item key={item} />
                        ))}
                    </motion.ul>

                </AnimateSharedLayout>

            </FloatInAnimation>

            <FloatInAnimation duration={1.5} initialOpacity={0} finalOpacity={1}>
                <h1>Educational History</h1>
            </FloatInAnimation>

            <FloatInAnimation duration={2} initialOpacity={0} finalOpacity={1}>

                <AnimateSharedLayout>

                    <motion.ul layout initial={{ borderRadius: 25 }}>
                        {items.map(item => (
                        <Item key={item} />
                        ))}
                    </motion.ul>

                </AnimateSharedLayout>

            </FloatInAnimation>
                        
            
            


        </div>

    
    )
}


function Item() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
      <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
        <motion.div className="avatar" layout > CONTENT  </motion.div>
        <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
      </motion.li>
    );
  }
  
  function Content() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="row" /> 
        <div className="row" /> 
        <div className="row" /> 
        Content goes in here!
      </motion.div>
    );
  }
  
  const items = [0, 1, 2, 3];

  //Need to have a start date, end date, name of company, role name, logo URL and description as well as a key variable