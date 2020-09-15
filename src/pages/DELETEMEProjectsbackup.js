import React from 'react';
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../styles.css";
import {FloatInAnimation} from '../components/FloatInAnimation';
import projectList from "../assets/data/projectList";
import styled from 'styled-components';
import {ImageBox} from '../components/boxes/imageBox';
import {isBrowser, isMobile, BrowserView, MobileView} from "react-device-detect";




const Styles = styled.div`


.background{
  z-index: -3;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%);
  background-repeat: no-repeat;
  display: flex;
  
  
}

`;




export const Projects = () => {
    
    const [selectedId, setSelectedId] = useState(null)
    
    return(

      <Styles>
        <div className="background">

            
            
            <FloatInAnimation duration={1.5} initialOpacity={0} finalOpacity={1} yOffset={50}>
                <h1>Projects</h1>
            </FloatInAnimation>

  
            
            <FloatInAnimation duration={2} initialOpacity={0} finalOpacity={1} yOffset={50}>
                <AnimateSharedLayout>
                    <motion.ul layout initial={{ borderRadius: 25 }}>
                        {projectList.map((item) => (
                        <>{Item(item)}</>
                        ))}
                    </motion.ul>
                </AnimateSharedLayout>
            </FloatInAnimation>

        </div>
      </Styles>

    
    )
}


function Item(props) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    

    return (
      <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
        <motion.div layout > <h2> <img src={props.img} style={{width:'10%', borderRadius: "50%"}}/>       {props.title}</h2><h6>{props.languages}</h6> </motion.div>
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
        
        <div style={{fontWeight:"bold"}}> {props.subtitle}</div>
        
        {props.description}

        
        <a href= {props.link} ><td> View on GitHub</td></a>

        
        
        
      </motion.div>
    );
  }
  
