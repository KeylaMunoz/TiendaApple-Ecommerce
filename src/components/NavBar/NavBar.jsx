import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = () => {
  return (
    <div>
        <div className="contenedor-nav">
            <div>
              <Link to="/">
                <img className="img-navbar" src="https://static.vecteezy.com/system/resources/thumbnails/020/489/292/small_2x/3d-logo-of-apple-iphone-free-png.png" alt="" />
              </Link>
            </div>
            <ul className="ul">
                <Link to="/categoria/iphone" className="items">iPhone</Link>
                <Link to="/categoria/macbook" className="items">MacBook</Link>
                <Link to="/categoria/watch" className="items">Apple Watch</Link>
                <Link to="/categoria/accesorios" className="items">Accesorios</Link>
            </ul>
        <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar
