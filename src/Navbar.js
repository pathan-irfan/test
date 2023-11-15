import React, { useState } from "react";
import "./navbar.css";
import Main from "./Main";
import { GiHamburgerMenu } from "react-icons/gi";
import Products from "./Products";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [newone, setNewone] = useState(false);

  const showbtn = () => {
    setNewone(true);
  }

  const clebtn = () => {
    setNewone(false);
  }
  return (
    <>
      <nav className="main-nav">
       
        <div className="logo">
         
          <img src="https://tikme.co/wp-content/uploads/2023/03/tikme-logo-new.png.webp" alt="" className="image"/>
        </div>

       
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul >
          <li className="hover">
            Home
            </li>
            <li onMouseOver={showbtn} className="hover">
            Products  <i class="fa-solid fa-chevron-down"></i>
            </li>
            <li className="hover">
             Restaurant Login
            </li>
            <li className="hover">
            Order Food Online
            </li>
          </ul>
          {newone && <Products action={clebtn} />}

        </div>

        <div className="social-media">
          
        <a href="./"><button className="btn">Request Demo </button></a>  
         
          <div className="hamburger-menu">
            <a to="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu style={{color:"white",backgroundColor:"orangered",width:"50px",height:"30px",borderRadius:"2px",marginLeft:"-30%",marginTop:"5%"}} />
            </a>
          </div>
        </div>
      </nav>
  
   
    </>
  );
};

export default Navbar;