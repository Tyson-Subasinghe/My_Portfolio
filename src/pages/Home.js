import React from 'react';
import styled from 'styled-components';
import ScrollText from 'react-scroll-text';
import {motion} from 'framer-motion';
import Marquee from "react-marquee";
import tealShoe from '../assets/tealShoe.png';
import { useInView } from 'react-intersection-observer';
import {FloatInAnimation} from '../components/FloatInAnimation';
import {rickLogo} from '../assets/tealShoe.png'



const Styles = styled.div`

    .shoe{
        position: relative;
        z-index: -1;
        width: 80vmin;
        mouseEvents: none;
    }

    .textLeft{
        position: absolute;
        top: calc(40%);
        right: calc(50%);
        overflow: hidden;
        justify-content: center;
        align-items: center;
        z-index: -2;
        
    }

    .textRight{
        position: absolute;
        top: calc(40%);
        left: calc(50%);
        overflow: hidden;
        justify-content: center;
        align-items: center;
        z-index: -2;
        
    }

    .background{
        z-index: -3;
        position: absolute;
        display: flex;
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
                        }} style={{alignItems:"center"}}>
                                    
                            
                            
                            <div  className="textLeft" style={{ width: '50vw', whiteSpace: 'nowrap', fontFamily: "ITCAvantGardeStd", fontSize: "10vh"}}>
                                <Marquee  hoverToStop={true} loop={true} text="adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas adidas "/>
                            </div>

                            <div className="textRight" style={{ width: '50vw', whiteSpace: 'nowrap', fontFamily: "Plateia", fontSize: "8vh"}}>
                                <Marquee  hoverToStop={true} loop={true} text="Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens  "/>
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
                        }}>
                            

                            <img src={tealShoe} style={{}} className="shoe"/>
                            
                        </motion.div>
                    </motion.div>

                </Styles>

        

    
)}