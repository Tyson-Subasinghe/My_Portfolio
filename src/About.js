import React from 'react';
import {FloatInAnimation} from './components/FloatInAnimation';




export const About = () => (

        <div>
            
            <FloatInAnimation duration={1.5} initialOpacity={0} finalOpacity={1}>
                <h1>Professional History</h1>
            </FloatInAnimation>

            <FloatInAnimation duration={2} initialOpacity={0} finalOpacity={1}>

                <h2> Blu Finance </h2>

                <h2> Mortgage Choice </h2>

                <h2> Etc </h2>

                <h2> Etc </h2>
            </FloatInAnimation>
            


            
           


                
            
            

            <FloatInAnimation duration={1.5} initialOpacity={0} finalOpacity={1}>
                <h1>Educational History</h1>
            </FloatInAnimation>

            


        </div>

    
)