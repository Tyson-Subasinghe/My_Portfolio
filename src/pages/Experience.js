import React from 'react';
import { useState } from "react";
import styled from 'styled-components';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../styles.css";
import {FloatInAnimation} from '../components/FloatInAnimation';
import workHistoryList from "../assets/data/workHistoryList";
import educationHistoryList from "../assets/data/educationHistoryList";



const background = "linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%)";


const Styles = styled.div`



`;


export const Experience = () => {
    
    const [selectedId, setSelectedId] = useState(null);
    
    return(

            <Styles>

              <motion.div className="background">

                <FloatInAnimation duration={.25} initialOpacity={0} finalOpacity={1} yOffset={50}>
                    <h1>Professional History</h1>
                </FloatInAnimation>

                
      
                
                <FloatInAnimation duration={0.35} initialOpacity={0} finalOpacity={1} yOffset={50}>

                    <AnimateSharedLayout type="crossfade">
                        <motion.ul layout initial={{ borderRadius: 25 }}>
                            {workHistoryList.map((item) => (
                            <>{Item(item)}</>
                            ))}
                        </motion.ul>
                    </AnimateSharedLayout>
                </FloatInAnimation>

                <FloatInAnimation duration={.25} initialOpacity={0} finalOpacity={1} yOffset={50}>
                    <h1>Education History</h1>
                </FloatInAnimation>

                
      
                
                <FloatInAnimation duration={0.35} initialOpacity={0} finalOpacity={1} yOffset={50}>
                    <AnimateSharedLayout>
                        <motion.ul layout initial={{ borderRadius: 25 }}>
                            {educationHistoryList.map((item) => (
                            <>{Item(item)}</>
                            ))}
                        </motion.ul>
                    </AnimateSharedLayout>
                </FloatInAnimation>
                            


              </motion.div>

            </Styles>
    
    )
}


function Item(props) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    

    return (
      <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
        <motion.div layout > <h2> <img src={props.img} style={{width:'10%'}}/>       {props.title}</h2><h6>{props.duration}</h6> </motion.div>
        <AnimatePresence>{isOpen && Content(props)}</AnimatePresence>
      </motion.li>
    );
  }
  
  function Content(props) {
    return (
      <motion.div
        
        initial={{  opacity: 0 }}
        animate={{  opacity: 1 }}
        exit={{ opacity: 0 }}
      > 
        
        <div style={{fontWeight:"bold"}}> {props.name}</div>
        
        {props.description}
        
        
      </motion.div>
    );
  }
  