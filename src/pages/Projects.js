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
  height: 200vh;
  background: linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 50%, rgb(116, 173, 185) 100%);
  
  display: flex;
  
  
}

.titleText{ 
  position: absolute;
  top: calc(5%);
  ${isMobile ? 
    `    
    font-size: calc(5vh + 2px);
    left: calc(24vw);
    
    `
    :
    `
    font-size: calc(4vw + 10px);
    
    left: calc(38vw);
    
    `
    }
  
}

.itemListWrapper{
  position: absolute;
  top: calc(4%);
  left: calc(15vw);
  
  
}
.itemList{
  position: relative;
  width: calc(70vw);
  overflow: hidden;
  
}
.title{
  ${isMobile ? 
    `    
    font-size: calc(4vh + 2px);
    
    `
    :
    `
    font-size: calc(3vw + 7.5px);
    
    `
    }
  
}
.languages{
  ${isMobile ? 
    `    
    font-size: calc(2vh + 1px);
    
    `
    :
    `
    font-size: calc(1.5vw + 3.75px);
    
    `
    }
}
.subtitle{

}

.description{

  ${isMobile ? 
    `    
    font-size: calc(2vh + 1px);
    
    `
    :
    `
    font-size: calc(1vw + 3.75px);
    
    `
    }
}



`;




export const Projects = () => {
    
    const [selectedId, setSelectedId] = useState(null)
    
    return(

      <Styles>
        <div className="background">

            
            
              
            
                <AnimateSharedLayout type="crossfade" >

                    <motion.ul  initial={{ borderRadius: 25 }}>
                      <div className="itemListWrapper">
                        {projectList.map((item) => (
                        
                        <div className="itemList">
                          <motion.div 
                          initial={{
                              opacity: 0,
                              y: 50,
                          }}
                          animate={{
                              opacity: 1,
                              y: 0,
                          }}
                          transition={{
                              delay: 0.3+0.1*item.id,
                          }}>
                            {Item(item)}
                          </motion.div>
                          </div>
                          
                        

                        ))}
                        </div>
                    </motion.ul>

                </AnimateSharedLayout>
            

        </div>
      </Styles>

    
    )
}


function Item(props) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    

    return (
      <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }} style={{marginTop: "1%"}}>
        <motion.div layout > <div className="title">        {props.title}</div><div className="languages">{props.languages}</div> </motion.div>
        <AnimatePresence>{isOpen && Content(props)}</AnimatePresence>
      </motion.li>
    );
  }
  
  function Content(props) {
    return (
      <motion.div
        layout
        initial={{  opacity: 0 }}
        animate={{  opacity: 1 }}
        exit={{ opacity: 0 }}
      > 
        
        <div className="subtitle">{props.subtitle}</div>
        
        <div className="description">{props.description}</div>

        
        <a href= {props.link} className="description"><td> View on GitHub</td></a>

        
        
        
      </motion.div>
    );
  }
  
