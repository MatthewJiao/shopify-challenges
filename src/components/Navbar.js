import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Container';
import shopify from '../assets/shopify-bag.png'

const NavbarC = () => {
  

  return (
    
        <div className = "pb-3 pt-1" style = {navStyle}>
            <img src = {shopify} style = {navImageStyle}></img>


           pacestagram
           
        </div>
    
  )
}

const navStyle = {
    color: "#97bd4e",
    backgroundColor: "#f9f4eb",
    opacity: 0.95,
    position: "fixed",
    top: 0,
    fontWeight: "bold",
    fontSize: "2rem",
    width: "100%",
    display: "flex",

    justifyContent: "center",
    fontStyle: "italic"
}

const navImageStyle = {
    height: "2.5rem", 
    paddingTop: "0.2rem",
    transform: "rotate(20deg)"
}


export default NavbarC;