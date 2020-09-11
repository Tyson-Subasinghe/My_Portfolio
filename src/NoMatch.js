import React from 'react';

export const NoMatch = () => {
    
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.1
          }
        }
      }
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }
    
    
    
    
    return(
        <div>
            
            <h1>Four Hundred and Four :)</h1>
            <p>I hope this is what you wanted.</p>


        </div>
)}