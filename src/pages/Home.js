import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Marquee from "react-marquee";
import tealShoe from '../assets/tealShoe.png';
import {isMobile} from "react-device-detect";

const Styles = styled.div`

    .shoe{
        position: relative;
        z-index: -1;
        width: 80vmin;
        mouseEvents: none;
    }

    .textLeft{
        position: absolute;
        font-family: "ITCAvantGardeStd";
        ${isMobile ? `
            top: calc(45%);
            font-size: calc(5vh);
            `
            :
            `
            top: calc(40%);
            font-size: calc(10vh);
            `
        }
        right: calc(50%);
        overflow: hidden;
        justify-content: center;
        align-items: center;
        z-index: -2;
    }

    .textRight{
        position: absolute;
        font-family: "Plateia";
        ${isMobile ? `
            top: calc(44.5% - 1px);
            font-size: calc(4.5vh);
            `
            :
            `
            top: calc(39% - 2px);
            font-size: calc(9vh);
            `
        }
        left: calc(50%);
        overflow: hidden;
        justify-content: center;
        align-items: center;
        z-index: -2;
    }

    .background{
        z-index: -3;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%);
        background-repeat: no-repeat;
        display: flex;
    }

`;

export const Home = () => {
    
    return(

        <Styles>
            <motion.div className="background"  >
                <motion.div 
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{delay: 1, duration: 0
                    }} style={{alignItems:"center"}}
                >
                    <div  className="textLeft" style={{ width: '50vw', whiteSpace: 'nowrap'}}>
                        <Marquee hoverToStop={true} loop={true} text="adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas "/>
                    </div>
                    <div className="textRight" style={{ width: '50vw', whiteSpace: 'nowrap'}}>
                        <Marquee hoverToStop={true} loop={true} text="Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens  "/>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{
                        opacity: 0,
                        y: 100,
                        rotate: -10
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        rotate:0
                    }}
                    transition={{
                        duration: 1
                    }}
                >
                    <img src={tealShoe} aria-label="shoe" alt="shoe" className="shoe" />
                </motion.div>

            </motion.div>
        </Styles>
  
)}