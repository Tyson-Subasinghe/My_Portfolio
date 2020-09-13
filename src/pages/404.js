import React from 'react';
import {useRef} from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import '../components/404/styles.css';

export const NoMatch = () => {    
    
    const background = "linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%)";
    const x = useMotionValue(0);
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const xInput = [(-vw/2 + 75), 0, (vw/2 - 75)];
    const ballRef = useRef(null);


    

    

    
    return(

        <motion.div className="example-container" style={{ background }}>
            
            <div>
            <h1>Four Hundred and Four</h1>
            <p> </p>
            <p>What did you expect? :)</p>
            <p>Here is a shape to play with</p>
            </div>
            


            

            <motion.div className="ball"
            ref = {ballRef}
            drag
            dragConstraints ={{left: (-vw/2 + 75), right: (vw/2 - 75), top: (-vh/2 + 75), bottom: (vh/2 - 75)}}
            style={{ x }}
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%"
            }}
            >

            

            </motion.div>



        </motion.div>
)}