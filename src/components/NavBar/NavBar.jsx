import CartWidget from "./CartWidget";
import { IoPhonePortraitOutline, IoWatchOutline } from "react-icons/io5";
import { IoIosLaptop, IoIosPhonePortrait } from "react-icons/io";
import { BsApple } from "react-icons/bs";
// import {  } from "react-icons/io5";
// import {  } from "react-icons/io";

import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = () => {
  return (
    <div>
        <div className="contenedor-nav">
            <div>
              <Link to="/"><BsApple className="img-inicio" color="white" size={30}/></Link>
            </div>
            <ul className="ul">
                <Link to="/categoria/iphone" className="items">
                  <div className="div-nav">
                  <IoIosPhonePortrait size={35} className="img-iphone"/><IoPhonePortraitOutline size={33} className="img-iphone"/>
                  </div>
                  iPhone</Link>
                <Link to="/categoria/macbook" className="items">
                  <div className="div-nav">
                  <IoIosLaptop size={55} className="img-mac"/>
                  </div>
                MacBook</Link>
                <Link to="/categoria/watch" className="items">
                  <div className="div-nav">
                   <IoWatchOutline size={35} className="img-watch"/>
                  </div >
                Watch</Link>
                <Link to="/categoria/accesorios" className="items">
                  <div className="div-nav">
                  <img className="img-airpods" src="https://imperativeprods.com/cdn/shop/files/IMG_6368.jpg?v=1715939691&width=533" alt="" />
                  </div>
                Accesorios</Link>
            </ul>
        <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar
