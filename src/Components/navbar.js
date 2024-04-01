import React from "react";
import './navbar.css';
import { Link } from "react-scroll";
import lillypad from "../lillypad.png";


export const navbar = () => {
  
  return (
    <nav className="navbar">
        <img src ={lillypad} alt="logo" className="logo"></img>
        <div>
            <Link className="navlink" activeClass="active" to="Home" spy ={true} smooth={true} offset={-100} duration={500}>Home</Link>
            <Link className="navlink" activeClass="active" to="AboutMe" spy ={true} smooth={true} offset={-100} duration={500}>About Me</Link>
            <Link className="navlink" activeClass="active" to="Portfolio" spy ={true} smooth={true} offset={-100} duration={500}>Portfolio</Link>
            <Link className="navlink" activeClass="active" to="GameDevPortfolio" spy ={true} smooth={true} offset={-100} duration={500}>GameDev</Link>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/chuan-wei-tan-41851725b"className="linkedinText">
            Linkedin
          </a>
        </div>
    </nav>
  )
}
export default navbar
