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



const Styles = styled.div`



.background{
  z-index: -3;
  position: absolute;
  
  background: linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%);
  background-repeat: no-repeat;
  
}
`;



const background = "linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%)";




export const Passions = () => {
    
    const [selectedId, setSelectedId] = useState(null);

    
    return(

            <Styles>
              
              

              <motion.div className="background">
                
                
                <FloatInAnimation duration={.25} initialOpacity={0} finalOpacity={1} yOffset={50}>
                    <h1>PASSIONS</h1>
                </FloatInAnimation>

      
                <ImageBox image={tealShoe}/>
                <ImageBox image={github}/>
                <ImageBox image={linkedin}/>
                <ImageBox image={facebook}/>
                <ImageBox image={phone}/>
                <ImageBox image={email}/>
                
                    

                


                <FloatInAnimation duration={.25} initialOpacity={0} finalOpacity={1} yOffset={50}>
                    <h1>PASSIONS https://www.facebook.com/tyson3141592653589793238462</h1>
                </FloatInAnimation>

                
      
                
                <FloatInAnimation duration={0.35} initialOpacity={0} finalOpacity={1} yOffset={50}>
                    <AnimateSharedLayout type="crossfade">
                        <motion.ul  initial={{ borderRadius: 25 }}>
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
  