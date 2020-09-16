import React from 'react';
import { useState } from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import {isBrowser, isMobile, BrowserView, MobileView} from "react-device-detect";

const Styles = styled.div`

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

  .textNonHighlight{
    font-family: "ITCAvantGardeStd";
    position: absolute;
    z-index: 2;
    ${isMobile ? 
      `    
      font-size: calc(6vh);
      left: calc(25vw);
      `
      :
      `
      font-size: calc(6vw);
      left: calc(35vw);
      `
    }
    font-weight: bold;
    justify-content: center;
    align-items: center;
    display: inline-block;
  }

  .textNonHighlight:hover{
    ${isMobile ? 
        `    
        color: white;
        -webkit-text-stroke-color: white;      
        `
        :
        `      
        color: black;
        -webkit-text-stroke-color: black;
        
        `
      }
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 2px;
  }

  .imageHighlight{
    position:absolute;
    top:0;
    z-index: 1;
    ${isMobile ? 
      `    
      width: calc(30vh);
      `
      :
      `
      width: calc(30vw);
      `
    }
  }

`;

const images = [
  "https://i.ibb.co/3FFWgxx/Weights.png",
  "https://i.ibb.co/KskkdNp/Futures.png",
  "https://i.ibb.co/X2D8Gh1/Lambo.png",
  "https://i.ibb.co/ZhBC1r7/royal-oak-15500st.png",
  "https://i.ibb.co/GHFXqw3/Fashion.png",
  "https://i.ibb.co/r2SBkyZ/book1.png"
]

export const Passions = () => {
    
    const [imageVisible,setImageVisible] = useState(0);
    
    return(

      <Styles>
        <motion.div>
          
          <BrowserView>
            <div className = "background" onMouseOver={()=>setImageVisible(0)}> </div>
            <div className="textNonHighlight" onMouseOver={()=>setImageVisible(1)} style={{top:"02vh"}}>Fitness</div>
            <div className="textNonHighlight" onMouseOver={()=>setImageVisible(2)} style={{top:"17.6vh"}}>Sneakers</div>
            <div className="textNonHighlight" onMouseOver={()=>setImageVisible(3)} style={{top:"33.2vh"}}>Cars</div>
            <div className="textNonHighlight" onMouseOver={()=>setImageVisible(4)} style={{top:"48.8vh"}}>Watches</div>
            <div className="textNonHighlight" onMouseOver={()=>setImageVisible(5)} style={{top:"64.4vh"}}>Fashion</div>
            <div className="textNonHighlight" onMouseOver={()=>setImageVisible(6)} style={{top:"80vh"}}>Reading</div>

            <motion.div  initial={{opacity: 0,}} animate={{opacity: imageVisible==1 ? 1:0 ,}}>
            <img src = {images[0]} style={{ top: "02vh", left: "0vw"}} className="imageHighlight"/>
            </motion.div>
            <motion.div initial={{opacity: 0,}} animate={{opacity: imageVisible==2 ? 1:0 ,}}>
            <img src = {images[1]} style={{ top: "17.6vh", left: "70vw"}} className="imageHighlight"/>
            </motion.div>
            <motion.div  initial={{opacity: 0,}} animate={{opacity: imageVisible==3 ? 1:0 ,}}>
            <img src = {images[2]} style={{ top: "33.2vh", left: "1vw", }} className="imageHighlight" />
            </motion.div>
            <motion.div  initial={{opacity: 0,}} animate={{opacity: imageVisible==4 ? 1:0 ,}}>
            <img src = {images[3]} style={{ top: "40.8vh", left: "70vw", width:"15vw"}} className="imageHighlight" />
            </motion.div>
            <motion.div  initial={{opacity: 0,}} animate={{opacity: imageVisible==5 ? 1:0 ,}}>
            <img src = {images[4]} style={{ top: "42.8vh", left: "3vw", width: "25vw"}} className="imageHighlight" />
            </motion.div>
            <motion.div  initial={{opacity: 0,}} animate={{opacity: imageVisible==6 ? 1:0 ,}}>
            <img src = {images[5]} style={{ top: "58.8vh", left: "70vw", width: "12vw"}} className="imageHighlight" />
            </motion.div>
          </BrowserView>

          <MobileView>
          <div className = "background" onMouseOver={()=>setImageVisible(0)}> </div>
            <div className="textNonHighlight" onMouseOver={()=>setImageVisible(1)} style={{top:"07vh"}}>Fitness</div>
            <div className="textNonHighlight" onMouseOver={()=>setImageVisible(2)} style={{top:"22.6vh"}}>Sneakers</div>
            <div className="textNonHighlight" onMouseOver={()=>setImageVisible(3)} style={{top:"38.2vh"}}>Cars</div>
            <div className="textNonHighlight" onMouseOver={()=>setImageVisible(4)} style={{top:"53.8vh"}}>Watches</div>
            <div className="textNonHighlight" onMouseOver={()=>setImageVisible(5)} style={{top:"69.4vh", color: "black", webkitTextStrokeColor: "black"}}>Fashion</div>
            <div className="textNonHighlight" onMouseOver={()=>setImageVisible(6)} style={{top:"85vh"}}>Reading</div>

            <motion.div  initial={{opacity: 0,}} animate={{opacity: imageVisible==1 ? 1:0 ,}}>
            <img src = {images[0]} style={{ top: "0vh", left: "calc(15%)"}} className="imageHighlight"/>
            </motion.div>
            <motion.div initial={{opacity: 0,}} animate={{opacity: imageVisible==2 ? 1:0 ,}}>
            <img src = {images[1]} style={{ top: "13.6vh", left: "calc(20%)"}} className="imageHighlight"/>
            </motion.div>
            <motion.div  initial={{opacity: 0,}} animate={{opacity: imageVisible==3 ? 1:0 ,}}>
            <img src = {images[2]} style={{ top: "37.2vh", left: "calc(15%)", }} className="imageHighlight" />
            </motion.div>
            <motion.div  initial={{opacity: 0,}} animate={{opacity: imageVisible==4 ? 1:0 ,}}>
            <img src = {images[3]} style={{ top: "45.8vh", left: "calc(35%)", width:"15vh"}} className="imageHighlight" />
            </motion.div>
            <motion.div  initial={{opacity: 0,}} animate={{opacity: imageVisible==5 ? 1:0 ,}}>
            <img src = {images[4]} style={{ top: "53.8vh", left: "calc(17%)"}} className="imageHighlight" />
            </motion.div>
            <motion.div  initial={{opacity: 0,}} animate={{opacity: imageVisible==6 ? 1:0 ,}}>
            <img src = {images[5]} style={{ top: "68.8vh", left: "35vw", width: "16vh"}} className="imageHighlight" />
            </motion.div>
          </MobileView>

        </motion.div>
      </Styles>
    
    )
}
