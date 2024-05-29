import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import './cartwidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal()


  return (

    <Link to="/cart" className='div-carrito'>
      <BsCart color="white" size={30} className='carrito'/>
      <p className='contador-carrito'> {cantidad >= 1 && cantidad} </p>
    </Link>
  )
}

export default CartWidget
