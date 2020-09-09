import React from 'react';
import styled from 'styled-components';
import ScrollText from 'react-scroll-text';
import {motion} from 'framer-motion';
import tealShoe from './assets/tealShoe.png';
import { useInView } from 'react-intersection-observer';


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
    

    const { ref, inView, entry } = useInView({
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
                

            
            


            
            

            <h2>Gym</h2>

            <p>Your downvote appeal is denied.

            # FAQ            ## What does it mean this time?            You were downvoted by me previously, you appealed, and I didn't accept it.  ## Why did you not accept my appeal?
            I didn't like one of these things:
            Your appeal was bland
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
            ## Do you hate me as a person?r appeal was bland
            I absolutely hated your comment in the first place
            You insulted my reasoning
            ## Will my appeals be denied in the future?
            That is a possibility. Your comment that I downvoted was outright awful, so it's likely all of your other comments will be downvoted.
            ## Do you hate me as a person?r appeal was bland
            I absolutely hated your comment in the first place
            You insulted my reasoning

            <div ref={ref}>
                <h2>{`Is this visible? ${inView}.`}</h2>
            </div>

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
            ## Do you hate me as a person?r appeal was bland
            I absolutely hated your comment in the first place
            You insulted my reasoning
            ## Will my appeals be denied in the future?
            That is a possibility. Your comment that I downvoted was outright awful, so it's likely all of your other comments will be downvoted.
            ## Do you hate me as a person?
            No, fellow Redditor, I do not. I would never hate another one of my kind. You have just made a mistake you shall overcome in the near future. And again, remember: Reddit is a privilege, not a right.
            </p>


        </div>

    
)}