import './cartwidget.css'
import { CiShoppingCart } from "react-icons/ci";

const CartWidget = () => {
  return (
    <div className='div-carrito'>
      <CiShoppingCart color="white" size={38} className='carrito'/>
      <p className='contador-carrito'>0</p>
    </div>
  )
}

export default CartWidget
