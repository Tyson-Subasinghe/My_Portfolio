import React from 'react';
import styled from 'styled-components';
import ScrollText from 'react-scroll-text';
import {motion} from 'framer-motion';
import tealShoe from './assets/tealShoe.png';
import blackShoe from './assets/blackShoe.jpg';
import S63 from './assets/S63.png';
import weight from './assets/weight.svg';
import { useInView } from 'react-intersection-observer';
import {FloatInAnimation} from './components/Animation';


const Styles = styled.div`

    .shoe{
        position: relative;
        z-index: 2;
    }

    .text{
        position: absolute;
        z-index: 1;
        
    }
`;



export const Home = () => {
    

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    const { ref2, inView2 } = useInView({
        /* Optional options */
        threshold: 0,
    });

    return(
    

        <div>
            
            <h1>Tyson Subasinghe</h1>

            <h2>.</h2>

            
                <Styles>

                    <ScrollText className="text">
                        <h1> Subtle, sculptural running shoe in full-grain leather and fabric upper with shaped rubber outsole. 
                        Six-eyelet lace-up closure with tonal cotton laces. Padded collar. Leather insole and partial lining. Leather; rubber sole. Imported.
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
                

            <FloatInAnimation duration={1.5} initialOpacity={0} finalOpacity={1}>
                 <h2>Gym</h2>
                 
            </FloatInAnimation>


            <FloatInAnimation duration={2} initialOpacity={0} finalOpacity={1}>
            <p> I really like the gym and go 6 times a week!</p>
            </FloatInAnimation>

            <img src={weight} style={{maxWidth:"50%"}}/>
            
            


            

            <FloatInAnimation duration={2} initialOpacity={0} finalOpacity={1}>
            <img src={tealShoe} style={{maxWidth:"50%"}} className="shoe"/>
            </FloatInAnimation>
            
            

           

            

            

            <FloatInAnimation duration={2} initialOpacity={0} finalOpacity={1}>
            <img src={tealShoe} style={{maxWidth:"50%"}} className="shoe"/>
            </FloatInAnimation>

            <p>## Will my appeals be denied in the future?
            That is a possibility. Your comment that I downvoted was outright awful, so it's likely all of your other comments will be downvoted.
            ## Do you hate me as a person?r appeal was bland
            I absolutely hated your comment in the first place
            You insulted my reasoning
            ## Will my appeals be denied in the future?
            That is a possibility. Your comment that I downvoted was outright awful, so it's likely all of your other comments will be downvoted.
            ## Do you hate me as a person?r appeal was bland
            I absolutely hated your comment in the first place
            You insulted my reasoning
            ## Will my appeals be denied in the future?
            That is a possibility. Your comment that I downvoted was outright awful, so it's likely all of your other comments will be downvoted.
            ## Do you hate me as a person?r appeal was bland
            I absolutely hated your comment in the first place
            You insulted my reasoning
            ## Will my appeals be denied in the future?
            That is a possibility. Your comment that I downvoted was outright awful, so it's likely all of your other comments will be downvoted.
            ## Do you hate me as a person?
            No, fellow Redditor, I do not. I would never hate another one of my kind. You have just made a mistake you shall overcome in the near future. And again, remember: Reddit is a privilege, not a right.
            </p>

            <FloatInAnimation duration={2} initialOpacity={0} finalOpacity={1}>
            <img src={tealShoe} style={{maxWidth:"50%"}} className="shoe"/>
            </FloatInAnimation>


        </div>

    
)}