import React from 'react';
import { useState } from "react";
import styled from 'styled-components';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../styles.css";
import {FloatInAnimation} from '../components/FloatInAnimation';
import workHistoryList from "../assets/data/workHistoryList";
import educationHistoryList from "../assets/data/educationHistoryList";
import {HistoryBox} from '../components/boxes/historyBox';
import {isBrowser, isMobile, MobileView, BrowserView} from "react-device-detect";


const background = "linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%)";


const Styles = styled.div`



.background{
  z-index: -3;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%);
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  
}


.invisibleoverlay{
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, rgba(0, 255, 185, 0.8) 0%, rgb(58,214,185,0.8) 100%);
}

.overlay{
  z-index: 3;
  position: absolute;
  top: 20vh;
  left: 10vw;
  height: 60vh;
  width: 80vw;
  border-radius: 5vh;
  background: rgba(255, 255, 255, 0.9);
}

.overlayContent{

  z-index:4;
  position: absolute;
  top: 5vh;
  left: 5vw;
  height: 50vh;
  width: 70vw;
  justify-content: center;
  align-items: center;
      
        
}

.line1{
  
  font-family: "SF-UI";
  position: relative;
    z-index: 1;
    ${isMobile ? 
      `
      
      font-size: calc(3.5vh + 1px);
      font-weight: bold;
      `
      :
      `
      
      font-size: calc(3vw + 5px);
      font-weight: bold;
      justify-content: center;
      align-items: center;
      
      `
      }
    
    display: flex;
    

}

.line2{
  
  font-family: "SF-UI";
  position: relative;
    z-index: 1;
    ${isMobile ? 
      `
      
      font-size: calc(2vh + 1px);
      font-weight: bold;
      `
      :
      `
      
      font-size: calc(2vw + 1px);
      font-weight: bold;
      
      `
      }
    
    display: flex;
    margin-top: 2%;
    

}

.line3{
  
  font-family: "SF-UI";
  position: relative;
    z-index: 1;
    ${isMobile ? 
      `
      
      font-size: calc(2vh + 1px);
      font-weight: bold;
      `
      :
      `
      
      font-size: calc(2vw + 1px);
      font-weight: bold;
      
      `
      }
      
    display: flex;
    margin-top: 1%;
    

}

.line4{
  
  font-family: "SF-UI";
  position: relative;
    z-index: 1;
    ${isMobile ? 
      `
      
      font-size: calc(2.5vh + 1px);
      font-weight: bold;
      `
      :
      `
      
      font-size: calc(2vw + 5px);
      font-weight: bold;
      
      `
      }
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;

}


.button {
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: -3vw;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background: transparent;
}

.titleHeading{

  font-family: ITCAvantGardeStd;
  position: absolute;
  z-index: 1;
  font-weight: bold;
  ${isMobile ? 
    `
    top: calc(2%);
    font-size: calc(5vh + 2px);
    
    `
    :
    `
    top: calc(2%);
    font-size: calc(4vw + 10px);
    
    
    `
    }
  
  display: flex;
  justify-content: center;
  align-items: center;
}

.titleWork{

  font-family: "SF-UI";
  position: absolute;
  z-index: 1;
  ${isMobile ? 
    `
    top: calc(13%);
    font-size: calc(2.5vh + 1px);
    font-weight: bold;
    `
    :
    `
    top: calc(23%);
    font-size: calc(2vw + 5px);
    font-weight: bold;
    
    `
    }
  
  display: flex;
  justify-content: center;
  align-items: center;
}



.imageBoxContainerWork {
  position: absolute;
  display: grid;
  overflow: show;
  margin: 0;
  list-style: none;
  
  ${isMobile ? 
  `
  top: calc(18%);
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(2, 1fr);
  `
  :
  `
  top: calc(30%);
  grid-template-columns:  repeat(3, 1fr); 
  grid-template-rows: repeat(1, 1fr);
  `
  }

  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
}


.titleEducation{
  
  font-family: "SF-UI";
  position: absolute;
    z-index: 1;
    ${isMobile ? 
      `
      top: calc(55%);
      font-size: calc(2.5vh + 1px);
      font-weight: bold;
      `
      :
      `
      top: calc(58%);
      font-size: calc(2vw + 5px);
      font-weight: bold;
      
      `
      }
    
    display: flex;
    justify-content: center;
    align-items: center;

}


.imageBoxContainerEducation {
  position: absolute;
  display: grid;
  overflow: show;
  margin: 0;
  list-style: none;
  
  ${isMobile ? 
  `
  top: calc(60%);
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(2, 1fr);
  `
  :
  `
  top: calc(65%);
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
            {selectedId<100 && <>
              <div className="line1">{workHistoryList[selectedId-1].name}</div>
              <div className="line2">{workHistoryList[selectedId-1].title}</div>
              <div className="line3">{workHistoryList[selectedId-1].duration}</div>
              <div className="line4">{workHistoryList[selectedId-1].description}</div>
              <BrowserView>
                  <button style={{zIndex:5}} className="button"
                  onClick={() => {
                    setContentOpacity(0);
                    setTimeout(function(){setContentOpacity(1)}, 500);
                    setTimeout(function(){setSelectedId(null)}, 500);
                    }} >
                  <svg width="43" height="43" viewBox="0 0 33 33">
                      <path
                        fill="transparent"
                        strokeWidth="3"
                        stroke="hsl(0, 0%, 18%)"
                        strokeLinecap="round"
                        d="M 3 16.5 L 17 2.5" 
                      />                
                      <path
                        fill="transparent"
                        strokeWidth="3"
                        stroke="hsl(0, 0%, 18%)"
                        strokeLinecap="round"
                        d= "M 3 2.5 L 17 16.346"
                      />                
                  </svg>
                  </button>
              </BrowserView>
              
            
            </>
            }
            {selectedId>100 && <>
              <div className="line1">{educationHistoryList[selectedId-101].name}</div>
              <div className="line2">{educationHistoryList[selectedId-101].title}</div>
              <div className="line3">{educationHistoryList[selectedId-101].duration}</div>
              <div className="line4">{educationHistoryList[selectedId-101].description}</div>
              <BrowserView>
                  <button style={{zIndex:5}} className="button"
                  onClick={() => {
                    setContentOpacity(0);
                    setTimeout(function(){setContentOpacity(1)}, 500);
                    setTimeout(function(){setSelectedId(null)}, 500);
                    }} >
                  <svg width="43" height="43" viewBox="0 0 33 33">
                      <path
                        fill="transparent"
                        strokeWidth="3"
                        stroke="hsl(0, 0%, 18%)"
                        strokeLinecap="round"
                        d="M 3 16.5 L 17 2.5" 
                      />                
                      <path
                        fill="transparent"
                        strokeWidth="3"
                        stroke="hsl(0, 0%, 18%)"
                        strokeLinecap="round"
                        d= "M 3 2.5 L 17 16.346"
                      />                
                  </svg>
                  </button>
              </BrowserView>
            </>
            }
            </motion.div>

        </div>
      </motion.div>
    

  </div>

)}

</div>
        














          <div className="titleHeading">
             👆 an icon
          </div>
          <div className="titleWork">
              Employment
          </div>
          
              
          
          <motion.div className="imageBoxContainerWork"
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
              {workHistoryList.map(item => (
                <div  layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                    <HistoryBox className="imageBox" image={item.img}  delay={0.2 + (item.id-1) * 0.1}/>
                </div>))}

              
            </motion.div>

            <motion.div className="imageBoxContainerEducation"
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
              {educationHistoryList.map(item => (
                <div  layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                    <HistoryBox className="imageBox" image={item.img}  delay={0.5 + (item.id-101) * 0.1}/>
                </div>))}

              
            </motion.div>

              

            <div className="titleEducation">
              Education
             </div>
      
          
          

        
      
      </div>

    </Styles>
    
    )
}


  