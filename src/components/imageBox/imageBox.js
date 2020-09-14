import React from 'react';
import { useRef } from "react";
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import { useDimensions } from "../navigation/use-dimensions.ts";



const Styles = styled.div`

.container {
  width: 150px;
  height: 150px;
  display: grid;
  overflow: wrap;
  margin: 10px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  mouseEvents: none;
}

.containerImage {
  width: 80px;
  height: 80px;
  mouseEvents: none;
  
}


`;


export const ImageBox = (props) => {


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
                    duration: 0.35,
                }}
            ref = {containerRef}
            drag
            dragConstraints = {containerRef}
            className="container">

                <img ref={ref} src={props.image} className="containerImage" draggable="false"/>

            </motion.div>
        </Styles>

        
    
    )
}