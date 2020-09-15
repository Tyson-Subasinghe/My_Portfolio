import React from 'react';
import { useRef } from "react";
import { useInView } from 'react-intersection-observer';
import {motion, useMotionValue} from 'framer-motion';
import styled from 'styled-components';
import { useDimensions } from "../navigation/use-dimensions.ts";
import {isBrowser, isMobile} from "react-device-detect";




const Styles = styled.div`



.ball {
    background: rgba(255,255,255,0.4);
    z-index:1;
    border-radius: 100%;
    width: 150px;
    height: 150px;
    position: absolute;
    
    display: flex;
    justify-content: center;
    align-items: center;
  
    ${isMobile ? 
      `
      top: calc(92% - 150px);
      left: calc(50% - 150px / 2);
      `
      :
      `
      top: calc(92% - 150px);
      left: calc(50% - 150px / 2);
      `
      }
  }


.container {
    border-radius: 100%;

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
  
  display: grid;
  overflow: wrap;
  
  background: rgba(255, 255, 255, 0.3);
  
  display: flex;
  justify-content: center;
  align-items: center;
  mouseEvents: none;
  
}

.containerImage {
    ${isMobile ? 
        `
        width: 7vh;
        
        `
        :
        `
        width: 5.33vw;
        
        `
        }
  
  mouseEvents: none;
}


`;


export const ProjectBox = (props) => {


    const x = useMotionValue(0);
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const containerRef = useRef(null);

    
    

    return(
        
        <Styles>
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
                    delay: 0.5+props.delay,
                    duration: 0.35
                }}
            ref = {containerRef}
            drag
            
            className="container">

                <a href={props.link} draggable="false"> 
                
                <motion.img  src={props.image} className="containerImage" draggable="false"/>
                </a>

            </motion.div>
            
        </Styles>

        
    
    )
}