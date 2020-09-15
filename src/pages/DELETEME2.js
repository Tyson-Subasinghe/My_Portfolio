import React from 'react';
import { useState } from "react";
import styled from 'styled-components';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../styles.css";
import {FloatInAnimation} from '../components/FloatInAnimation';
import projectList from "../assets/data/projectList";
import educationHistoryList from "../assets/data/educationHistoryList";
import {ProjectBox} from '../components/boxes/projectBox';
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
  height: 70vh;
  width: 80vw;
  border-radius: 5vh;
  background: rgba(255, 255, 255, 0.9);
}

.overlayContent{

  z-index:4;
  position: absolute;
  top: 5vh;
  left: 5vw;
  height: 60vh;
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



.imageBoxContainerProjects {
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
  top: calc(18%);
  grid-template-columns:  repeat(3, 1fr); 
  grid-template-rows: repeat(1, 1fr);
  `
  }

  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  
}

.decorativeContainer {
  position: absolute;
  ${isMobile ? 
    `
    width: 13vh;
    height: 13vh;
    margin: 0.7vh;
   
    `
    :
    `
    width: 10vw;
    height: 10vw;
    margin: 1vw;
    
    `
    }
  border-radius: 100%;
  list-style: none;  
  background: rgba(255, 255, 255, 0.2);
  
}


.titleEducation{
  
  
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










`;


export const Projects = () => {
    
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
            
              <div className="line1">{projectList[selectedId-1].title}</div>
              <div className="line3">{projectList[selectedId-1].languages}</div>
              <div className="line2">{projectList[selectedId-1].subtitle}</div>
              <div className="line4">{projectList[selectedId-1].description}</div>
              <a href={projectList[selectedId-1].link}>View on GitHub</a>
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
              
            
            
            </motion.div>

        </div>
      </motion.div>
    

  </div>

)}

</div>
        














          <div className="titleHeading">
             Tap on a project to view
          </div>
          
          
              
          
          <motion.div className="imageBoxContainerProjects"
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
            <BrowserView>
                <motion.div className="decorativeContainer" style={{left:"40vw", top:"30vw"}}/>
                <motion.div className="decorativeContainer" style={{left:"-23vw", top:"32vh"}}/>
                <motion.div className="decorativeContainer" style={{left:"37vw", top:"-20vh"}}/>
                <motion.div className="decorativeContainer" style={{right:"-40vw", top:"10vh"}}/>
                <motion.div className="decorativeContainer" style={{left:"-40vw", top:"-15vh"}}/>
                <motion.div className="decorativeContainer" style={{left:"-5vw", top:"55vh"}}/>
                <motion.div className="decorativeContainer" style={{left:"-40vw", top:"60vh"}}/>
            </BrowserView>
              {projectList.map(item => (
                <div  layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                    <ProjectBox className="imageBox" image={item.img}  delay={0.2 + (item.id-1) * 0.1}/>
                </div>))}

              
            </motion.div>

            

              

            <TEMP>

            <motion.div 
              initial={{
                  opacity: 0,
                  y: 50,
              }}
              animate={{
                  opacity: 1,
                  y: 0,
              }}
              >
                <div className="titleText">Projects</div>
            </motion.div>
            </TEMP>
      
          
          

        
      
      </div>

    </Styles>
    
    )
}


  