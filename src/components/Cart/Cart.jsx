import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";


const Cart = () => {
    const { carrito, vaciarCarrito, borrarProductoId, precioTotal } = useContext(CartContext)

    if (carrito.length === 0){
      return(
        <div>
          <h1>¡Tu carrito está vacío!</h1>
          <Link to="/" >Ver productos</Link>
        </div>
      )
    }

  return (
    <div>
      {
        carrito.map( (productoCarrito) => (
            <div key={productoCarrito.id}>
                <img src={productoCarrito.imagen} style={{width:"100px"}} />
                <h1>{productoCarrito.nombre}</h1>
                <p> Precio: ${productoCarrito.precio}USD</p>
                <p >Cantidad: {productoCarrito.cantidad}</p>
                <p>Precio Total: ${productoCarrito.precio * productoCarrito.cantidad}USD</p>
                <button onClick={() => borrarProductoId(productoCarrito.id)}><MdDeleteForever /></button>
            </div>
        ))   
      }
      <p>Total de la compra: ${precioTotal()} </p>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart
