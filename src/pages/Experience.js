import React from 'react';
import { useState } from "react";
import styled from 'styled-components';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../styles.css";
import {FloatInAnimation} from '../components/FloatInAnimation';
import workHistoryList from "../assets/data/workHistoryList";
import educationHistoryList from "../assets/data/educationHistoryList";
import {ImageBox} from '../components/imageBox/imageBox';
import {isBrowser, isMobile} from "react-device-detect";


const background = "linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%)";


const Styles = styled.div`



.background{
  z-index: -3;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%);
  background-repeat: no-repeat;
  
}


.invisibleoverlay{
  z-index: 2;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, rgba(0, 255, 185, 0.8) 0%, rgb(58,214,185,0.8) 100%);
}

.overlay{
  z-index: 3;
  position: absolute;
  top: 10vh;
  left: 10vw;
  height: 80vh;
  width: 80vw;
  border-radius: 5vh;
  background: rgba(255, 255, 255, 0.9);
}

.overlayContent{

        z-index:4;
        position: absolute;
        top: 5vh;
        left: 5vw;
        height: 70vh;
        width: 70vw;
        justify-content: center;
        align-items: center;
        
        
}


`;

function handleVisibility() {
  
  

};

export const Experience = () => {
    
  const [selectedId, setSelectedId] = useState(null);
  const [contentOpacity, setContentOpacity] = useState(1);
  
   

    return(

    <Styles>

      <div className="background" >

      <div>
      
{selectedId  &&  (
  
<div> 
    
    <motion.div className="invisibleoverlay" onClick={() => {
              setContentOpacity(0);
              setTimeout(function(){setContentOpacity(1)}, 500);
              setTimeout(function(){setSelectedId(null)}, 500);
              }}
              initial={{
                opacity: 0,
            }}
            animate={{
                opacity: contentOpacity,
            }}
            transition={{delay: 0, duration: 0.5}}/>

      <motion.div className="overlay"
      
      initial={{
        opacity: 0,
    }}
    animate={{
        opacity: contentOpacity,
    }}
    transition={{delay: 0, duration: 0.5}}>
      
        <div className="overlayContent">
           
            <motion.div 
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: contentOpacity,
            }}
            transition={{delay: 0, duration: 0.5}}
            >
              
            <h1>{workHistoryList[selectedId-1].name}</h1>
            <h2>{workHistoryList[selectedId-1].title}</h2>
            <h3>{workHistoryList[selectedId-1].description}</h3>
            <button onClick={() => {
              setContentOpacity(0);
              setTimeout(function(){setContentOpacity(1)}, 500);
              setTimeout(function(){setSelectedId(null)}, 500);
              }} 
          style={{height:"30px", width:"30px", borderRadius: "50%"}} />
            </motion.div>

        </div>
      </motion.div>
    

  </div>

)}

</div>
        
          <h1>Professional History</h1>

              {workHistoryList.map(item => (
                <div  layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                    <img src={item.img} style={{width:"100px"}}/>
                </div>))}

          <h1>Education History</h1>
      
          
          

        
      
      </div>

    </Styles>
    
    )
}


  