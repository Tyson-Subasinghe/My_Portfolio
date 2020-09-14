import React from 'react';
import { useState } from "react";
import { useRef } from "react";
import {motion} from 'framer-motion';

import Marquee from "react-marquee";
import Ticker from 'react-ticker'
import '../components/404/styles.css';
import { useDimensions } from "../components/navigation/use-dimensions.ts";


export const Passions = () => {

      
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

      
    const [isClicked, setIsClicked] = useState(false);
    const constraintsRef = useRef(null)

    const containerRef = useRef(null);
    const {height, width} = useDimensions(containerRef);
  


      
     return(
        <div>
            <h1> Contact me via</h1>




        
           




            <div
      style={{
        width: '50vw',
        whiteSpace: 'nowrap',
      }}
    >
      <Marquee style={{ width: '50vw', whiteSpace: 'nowrap'}} hoverToStop={true} loop={true} text="adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas "/>
        

    </div>
            
            
            
            
             <motion.div className="container" 
            animate={{scale: isClicked ? [1,0.7,0.9,0.75,0.85,0.78,0.82,0.8]:[0.8,1.1,0.9,1.05,0.95,1.025,0.975,1]}} onClick={()=>setIsClicked(!isClicked)}>
             <Ticker>
                                    {({ index }) => (
                                    <>
                                        <h1>This is the Headline of element #{index}!</h1>
                                        
                                    </>
                                    )}
                                    </Ticker>
            </motion.div>
            <Ticker>
                                    {({ index }) => (
                                    <>
                                        <h1>This is the Headline of element #{index}!</h1>
                                        
                                    </>
                                    )}
                                    </Ticker>
            

            <motion.div className="ball"
            ref = {containerRef}
            drag
            dragConstraints ={containerRef}
            >
                 <Ticker>
                                    {({ index }) => (
                                    <>
                                        <h1>This is the Headline of element #{index}!</h1>
                                        
                                    </>
                                    )}
                                    </Ticker>

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

                             
            <Ticker>
              {({ index }) => (
            <>
                <h1>This is the Headline of element #{index}!</h1>
                
            </>
             )}
             </Ticker>
            

            
        

            
        

        </div>

    
)}

