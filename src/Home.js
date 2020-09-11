import React from 'react';
import styled from 'styled-components';
import ScrollText from 'react-scroll-text';
import {motion} from 'framer-motion';
import tealShoe from './assets/tealShoe.png';
import { useInView } from 'react-intersection-observer';
import {FloatInAnimation} from './components/FloatInAnimation';



const Styles = styled.div`

    .shoe{
        position: relative;
        z-index: -1;
    }

    .text{
        position: absolute;
        z-index: -2;
        
    }
`;



export const Home = () => {
    

    return(
    

        <div>
            
            

            
                <Styles>
                    
                
                    
                    <ScrollText className="text">
                        <h1 style={{fontFamily: "ITCAvantGardeStd"}}> Rick Owens x adidas x Tyson - Level Runner II Rick Owens x adidas x Tyson - Level Runner II 
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

                        <img src={tealShoe} style={{maxWidth:"50%"}} className="shoe"/>
                        
                    </motion.div>

                </Styles>

        </div>

    
)}