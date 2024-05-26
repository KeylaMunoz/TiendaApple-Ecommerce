import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import './cartwidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal()


  return (

    <Link to="/cart" className='div-carrito'>
      <HiOutlineShoppingBag color="white" size={25} className='carrito'/>
      <p className='contador-carrito'> {cantidad >= 1 && cantidad} </p>
    </Link>
  )
}

export default CartWidget
