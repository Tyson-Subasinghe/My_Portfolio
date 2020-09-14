import React from 'react';
import { useState, useRef } from "react";
import styled from 'styled-components';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../styles.css";
import {FloatInAnimation} from '../components/FloatInAnimation';
import workHistoryList from "../assets/data/workHistoryList";
import educationHistoryList from "../assets/data/educationHistoryList";
import tealShoe from '../assets/tealShoe.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import phone from '../assets/phone.png';
import email from '../assets/email.png';
import {ImageBox} from '../components/imageBox/imageBox';
import {isBrowser, isMobile} from "react-device-detect";



const Styles = styled.div`



.background{
  z-index: -3;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%);
  background-repeat: no-repeat;

  
  
}


  
.imageBoxContainer {
  position: absolute;
  
  display: grid;
  overflow: show;
  margin: 0;
  list-style: none;
  
  ${isMobile ? 
  `
  top: calc(25% + 5vh);
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(2, 1fr);
  `
  :
  `
  top: calc(30%);
  grid-template-columns:  repeat(4, 1fr); 
  grid-template-rows: repeat(1, 1fr);
  `
  }

  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
}
`;



const background = "linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%)";




export const Passions = () => {
    
    const [selectedId, setSelectedId] = useState(null);

    
    return(

            <Styles>
              
              

              <motion.div className="background" >
                
               
                <FloatInAnimation duration={.25} initialOpacity={0} finalOpacity={1} yOffset={50}>
                    <h1>PASSIONS</h1>
                </FloatInAnimation>


            
            <motion.div className="imageBoxContainer"
                initial={{
                  opacity: 0,
                  y: 50,
              }}
              animate={{
                  opacity: 1,
                  y: 1,
              }}
              transition={{
                  delay: 0.1,
                  duration: 0.5,
              }}
            >
              <AnimateSharedLayout type="crossfade">
                        
                            
                        

                        
                  {educationHistoryList.map((item) => (
                                <>{<ImageBox className="imageBox" image={item.img} delay={0.1}/>}</>
                                ))}

              </AnimateSharedLayout>

              </motion.div>



                    

                
      
                
                <FloatInAnimation duration={0.35} initialOpacity={0} finalOpacity={1} yOffset={50}>
                    

                </FloatInAnimation>



                               
                
                            


              </motion.div>

            </Styles>
    
    )
}


function Item(props) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    

    return (
      <motion.li  onClick={toggleOpen} initial={{ borderRadius: 10 }}>
        <motion.div  > <h2> <img src={props.img} style={{width:'10%'}}/>       {props.title}</h2><h6>{props.duration}</h6> </motion.div>
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
  