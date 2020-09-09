import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

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

        <Navbar expand="lg">
            <Navbar.Brand href ="/">Tyson</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className = "ml-auto">
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    </Styles>
)