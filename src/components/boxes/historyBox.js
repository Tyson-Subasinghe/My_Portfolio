import React from 'react';
import { useRef } from "react";
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import { useDimensions } from "../navigation/use-dimensions.ts";
import {isBrowser, isMobile} from "react-device-detect";




const Styles = styled.div`

.container {

    ${isMobile ? 
        `
        width: 13vh;
        height: 13vh;
        margin: 0.7vh;
        border-radius: 4.5vh;
        `
        :
        `
        width: 10vw;
        height: 10vw;
        margin: 1vw;
        border-radius: 3.3vw;
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


export const HistoryBox = (props) => {


    const { ref, inView } = useInView({});
    const containerRef = useRef(null);
    const {height, width} = useDimensions(containerRef);
    

    return(
        
        <Styles>
            <motion.div 
                
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 50,
                    
                    
                }}
                transition={{
                    delay: 0.5+props.delay,
                    duration: 0.35
                }}
            ref = {containerRef}
            drag
            dragConstraints = {containerRef}
            className="container">

                <a href={props.link} draggable="false"> 
                
                <motion.img whileHover={{ scale: 1.1 }} ref={ref} src={props.image} className="containerImage" draggable="false"/>
                </a>

            </motion.div>
            
        </Styles>

        
    
    )
}