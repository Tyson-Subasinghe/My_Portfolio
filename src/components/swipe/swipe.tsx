import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import facebook from '../../assets/facebook.png';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import {ImageBox} from '../boxes/imageBox';
import {isBrowser, isMobile} from "react-device-detect";
import styled from 'styled-components';




  const Styles = styled.div`
    
  .example-container {
    width: 100vw; 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  .prompt1 {
    font-family: ITCAvantGardeStd;
    position: absolute;
    z-index: 1;
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
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .prompt2 {
    font-family: ITCAvantGardeStd;
    position: absolute;

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

    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  .imageBoxContainer {
    position: absolute;
    display: grid;
    overflow: show;
    margin: 0;
    list-style: none;
    
    ${isMobile ? 
    `
    top: calc(25% + 5vh);
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(2, 1fr);
    `
    :
    `
    top: calc(30%);
    grid-template-columns:  repeat(4, 1fr); 
    grid-template-rows: repeat(1, 1fr);
    `
    }

    gap: 15px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50px;
  }


  .button {
    ${isMobile ? 
      `
      width: calc(10vw + 70px);
      height: calc(10vw + 70px);
      top: calc(100% - ((10vw + 70px) / 2) - (15vh));
      left: calc(50% - (10vw + 70px)/ 2);
      `
      :
      `
      width: 150px;
      height: 150px;
      top: calc(50% + 350px / 2);
      left: calc(50% - 150px / 2);
      `
      }
    background: white;
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .progress-icon {
    width: 100%;
    height: 100%;
  }
  

  
`;



export const Swipe = () => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
  ]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "#3ad6b9",
    "rgb(3, 209, 0)"
  ]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -50], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  const handleDragEnd = ()=>{
    if(x.get()<xInput[0]*0.9){
      window.location = "/";
    }else if(x.get()>xInput[2]*0.9){
      window.location = "mailto:tysonsubasinghe@gmail.com?subject=I swiped yes!";
    } 
  };


  return (

      <Styles>

        <motion.div className="example-container" style={{ background }}>
            
            <motion.div className="prompt1">
                Get in touch
            </motion.div>
            
            <motion.div className="imageBoxContainer"
                initial={{
                  opacity: 0,
                  y: 50,
              }}
              animate={{
                  opacity: 1,
                  y: 1,
              }}
              transition={{
                  delay: 0.1,
                  duration: 0.5,
              }}
            >
              <ImageBox className="imageBox" image={github} link={"https://github.com/Tyson-Subasinghe"} delay={0.1}/>
              <ImageBox className="imageBox" image={linkedin} link={"https://www.linkedin.com/in/tyson161828/"} delay={0.2}/>
              <ImageBox className="imageBox" image={phone} link={"tel:+61478138575"}  delay={0.3}/>
              <ImageBox className="imageBox" image={email} link={"mailto:tysonsubasinghe@gmail.com?subject=Hello!"} delay={0.4}/>
            </motion.div>

            <motion.div className="prompt2" style={{zIndex:1}}>or just swipe on me!</motion.div>

            <motion.div
              className="button"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              
              <svg className="progress-icon" viewBox="0 0 50 50">
                
                <motion.path
                  fill="none"
                  strokeWidth="2"
                  stroke={color}
                  d="M14,26 L 22,33 L 35,16"
                  strokeDasharray="0 1"
                  style={{ pathLength: tickPath }}
                />
                <motion.path
                  fill="none"
                  strokeWidth="2"
                  stroke={color}
                  d="M17,17 L33,33"
                  strokeDasharray="0 1"
                  style={{ pathLength: crossPathA }}
                />
                <motion.path
                  fill="none"
                  strokeWidth="2"
                  stroke={color}
                  d="M33,17 L17,33"
                  strokeDasharray="0 1"
                  style={{ pathLength: crossPathB }}
                />
              </svg>
            </motion.div>
          
        </motion.div>

      </Styles>
   
  );
};
