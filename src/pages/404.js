import React from 'react';
import {useRef} from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import {isBrowser, isMobile} from "react-device-detect";
import styled from 'styled-components';



const Styles = styled.div`

.container {
  display: flex;
  overflow: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw; 
  height: 100vh;
  background: linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%);
}


.ball {
  background: white;
  z-index:1;
  border-radius: 20%;
  width: 150px;
  height: 150px;
  position: absolute;
  top: calc(50% - 150px / 2);
  left: calc(50% - 150px / 2);
  display: flex;
  justify-content: center;
  align-items: center;
}

`;






export const NoMatch = () => {    
    
    const x = useMotionValue(0);
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const ballRef = useRef(null);
    
    return(

        <Styles>
          <motion.div className="container" >
              
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
              }}/>

          </motion.div>
        </Styles>
)}