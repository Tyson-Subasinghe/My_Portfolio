import React from 'react';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';


export const FloatInAnimation = (props) => {

    const { ref, inView } = useInView({});

    return(

        <motion.div 
        layout
        
        initial={{
            opacity: props.initialOpacity,
            y: props.yOffset,
        }}
        animate={{
            opacity: inView ? props.finalOpacity : props.initialOpacity,
            y: inView ? 0 : props.yOffset,
        }}
        transition={{
            duration: props.duration
        }}>

        <div ref={ref}>
          {props.children}
        </div>

        </motion.div>
    
    )
}