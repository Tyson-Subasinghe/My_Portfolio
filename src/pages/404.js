import React from 'react';
import {useRef} from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import {isBrowser, isMobile} from "react-device-detect";
import styled from 'styled-components';



const Styles = styled.div`

.background{
  background: linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%);
  width: 100vw; 
  height: 100vh;
}

.container {
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 100vw; 
  height: 100vh;
}


.ball {
  background: white;
  z-index:1;
  border-radius: 20%;
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

.toptext{
  
  
  ${isMobile ? 
    `
    top: calc(12%);
    font-size: calc(5vh + 2px);
    font-weight: bold;
    `
    :
    `
    top: calc(10%);
    font-size: calc(4vw + 10px);
    font-weight: bold;
    
    `
    }
  
  

}

.subtext{
  

  ${isMobile ? 
    `
    top: calc(70%);
    font-size: calc(3vh + 2px);
    `
    :
    `
    top: calc(62%);
    font-size: calc(2vw + 5px);
    `
    }

  
}

`;




export const NoMatch = () => {    
    
    const x = useMotionValue(0);
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const ballRef = useRef(null);
    
    return(

        <Styles>
          <div className="background">
             
          <motion.div className="container" >
              
              <div>
                <p className="toptext">Four Hundred and Four</p>
                <p> </p>
                <p className="subtext">What did you expect? :)</p>
                <p className="subtext">Here is a shape to play with</p>
              </div>
              


              

              <motion.div className="ball"
              ref = {ballRef}
              drag
              dragConstraints ={{left: (-vw/2 + 75), right: (vw/2 - 75), top: (-vh*0.92 + 150), bottom: (vh*0.08)}}
              style={{ x }}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}/>

          </motion.div>
          </div>
        </Styles>
)}