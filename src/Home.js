import React from 'react';
import styled from 'styled-components';
import ScrollText from 'react-scroll-text';
import tealShoe from './assets/tealShoe.png';


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

export const Home = () => (
    

        <div>
            
            <h1>My passions</h1>

            <h2>Sneakers</h2>

            <Styles>

                <ScrollText className="text">
                    <h1> Subtle, sculptural running shoe in full-grain leather and fabric upper with shaped rubber outsole. 
                    Six-eyelet lace-up closure with tonal cotton laces. Padded collar. Leather insole and partial lining. Leather; rubber sole. Imported.
                    </h1>
                </ScrollText>
                
                <img src={tealShoe} style={{maxWidth:"50%"}} className="shoe"/>

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

    
)