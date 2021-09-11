import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Container';

const NavbarC = () => {
  

  return (
    
        <div className = "pb-3 pt-1" style = {navStyle}>
           Image Repository
        </div>
    
  )
}

const navStyle = {
    color: "#c5d4d2",
    backgroundColor: "#deffe2",
    opacity: 0.95,
    position: "fixed",
    top: 0,
    fontWeight: "bold",
    fontSize: "2rem",
    width: "100%",
    display: "flex",

    justifyContent: "center",
}

const navImageStyle = {
    height: "2.5rem", 
    paddingTop: "0.2rem",
    transform: "rotate(20deg)"
}


export default NavbarC;