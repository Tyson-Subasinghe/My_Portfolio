import React from 'react';
import styled from 'styled-components';
import ScrollText from 'react-scroll-text';
import {motion} from 'framer-motion';
import tealShoe from '../assets/tealShoe.png';
import { useInView } from 'react-intersection-observer';
import {FloatInAnimation} from '../components/FloatInAnimation';



const Styles = styled.div`

    .shoe{
        position: relative;
        z-index: -1;
    }

    .text{
        position: absolute;
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
    }
`;
const background = "linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%)";



export const Home = () => {
    

    return(
    

       
            
            

            
                <Styles>

                     <motion.div className="background" style={{background}} >

                     
                    
                        <ScrollText className="text">
                            <h1 style={{fontFamily: "ITCAvantGardeStd"}}> Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick OwensRick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick OwensRick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens Rick Owens  
                            </h1>
                        </ScrollText>
                    
                    

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

                            <img src={tealShoe} style={{maxWidth:"50%", marginLeft:"25%"}} className="shoe"/>
                            
                        </motion.div>
                    </motion.div>

                </Styles>

        

    
)}