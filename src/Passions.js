import React from 'react';
import { useState } from "react";
import { useRef } from "react";
import {motion} from 'framer-motion';

import './shapeStyles.css';
import { useDimensions } from "./use-dimensions.ts";


export const Passions = () => {

    

      
    const [isClicked, setIsClicked] = useState(false);
    const constraintsRef = useRef(null)

    const containerRef = useRef(null);
    const {height, width} = useDimensions(containerRef);
    
      
     return(
        <div>
            <h1> Contact me via</h1>

            //Bouncy!
            <motion.div className="container" 
            animate={{scale: isClicked ? [1,0.7,0.9,0.75,0.85,0.78,0.82,0.8]:[0.8,1.1,0.9,1.05,0.95,1.025,0.975,1]}} onClick={()=>setIsClicked(!isClicked)}>
            
            </motion.div>

            //HOVER!
            <motion.div className="linkedIn"
            ref = {containerRef}
            drag
            dragConstraints ={10}
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
            }}>

            </motion.div>
            
            <h1> I like:</h1>
            <h2> Sneakers </h2>
            <h2> Cars and Engines</h2>
            <h2> Watches and horology</h2>
            <h2> Fashion</h2>
            <h2> The Gym</h2>
            <h2> Technology</h2>
            <h2> Photography</h2>
            <h2> Startups</h2>
        

            
        

        </div>

    
)}