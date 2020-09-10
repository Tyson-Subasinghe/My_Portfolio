import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import logo from '../assets/logo.png';


const Styles = styled.div`
    .navbar{
        background-color: rgba(0,0,0,0.0);
    }

    .navbar-brand .navbar-nav .nav-link{
        color: black;

        &:hover{
            color: white;
        }
    }
`;

export const NavigationBar = () => (

    <Styles>
         <motion.div 
        initial={{
            opacity: 0,
            y: -10,
            
        }}
        
        animate={{
            opacity: 1,
            y: 0,
            
        }}
        transition={{
            duration: 0.5
        }}>
                            
                            
                        
            <Navbar expand="lg">
                <Navbar.Brand href ="/"><img src={logo} style={{maxWidth:"10%"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className = "ml-auto">
                        <Nav.Item><Nav.Link href="/about"><motion.div whileHover={{ scale: 1.05 }}><h5> History </h5></motion.div></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/projects"><motion.div whileHover={{ scale: 1.05 }}> <h5>Projects</h5> </motion.div></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/contact"><motion.div whileHover={{ scale: 1.05 }}> <h5>Contact</h5> </motion.div></Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </motion.div>
    </Styles>
)