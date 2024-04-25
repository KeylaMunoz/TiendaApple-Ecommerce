import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {
  return (
    <div>
        <div className="contenedor-nav">
            <div>
                <img className="img-navbar" src="https://static.vecteezy.com/system/resources/thumbnails/020/489/292/small_2x/3d-logo-of-apple-iphone-free-png.png" alt="" />
            </div>
            <ul className="ul">
                <li className="items">Iphone</li>
                <li className="items">MacBook</li>
                <li className="items">Apple Watch</li>
                <li className="items">Accesorios</li>
            </ul>
        <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar
