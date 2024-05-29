import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { MdDeleteForever } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./cart.css"


const Cart = () => {
    const { carrito, vaciarCarrito, borrarProductoId, precioTotal } = useContext(CartContext)

    if (carrito.length === 0){
      return(
        <div>
          <p className="titulo1"> Tu carrito esta vacío.</p>
          <Link className="titulo2" to="/">Descubre Apple</Link>
          <div className="contenedor-links">
          <Link className="link1" to="/categoria/macbook"><img className="img1" src="https://i.blogs.es/362e54/macbook-pro-2019/1366_2000.jpg" alt="" /></Link>
          <Link className="link2" to="/categoria/accesorios"><img className="img2" src="https://www.palabraderunner.com/wp-content/uploads/2021/10/AirPods-3-Generacion-2021-5.jpg" alt="" /></Link>
          <Link className="link3" to="/categoria/iphone"><img className="img3" src="https://i.ytimg.com/vi/u6_iAwLHdKQ/maxresdefault.jpg" alt="" /></Link>
          <Link className="link4" to="/categoria/watch"><img className="img4" src="https://i.ytimg.com/vi/xBmaVrwO11k/sddefault.jpg" alt="" /></Link>
          </div>
        </div>
      )
    }

  return (
    <div>
        <p className="titulo-carrito">Tus productos</p>
      {
        carrito.map( (productoCarrito) => (
            <div className="contenedor-producto-carrito" key={productoCarrito.id}>
                <div className="contenedor-img-producto">
                  <img className="img-producto-carrito" src={productoCarrito.imagen} />
                </div>
                <p className="titulo-producto-carrito" >{productoCarrito.nombre}</p>
                <p className="precio-unidad"> Precio: ${productoCarrito.precio}usd</p>
                <p className="cantidad-producto-carrito">Cantidad: {productoCarrito.cantidad}</p>
                <p className="precio-total">Precio Total: ${productoCarrito.precio * productoCarrito.cantidad}usd</p>
                <button className="borrar-producto" onClick={() => borrarProductoId(productoCarrito.id)}><MdDeleteForever size={35} color="white"/></button>
            </div>
        ))   
      }
        <button  className="vaciar-carrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
      <div className="contenedor-compra">
        <p className="precio-total-carrito">Total de la compra: ${precioTotal()}usd </p>
        <div className="contenedor-boton-compra">
          <button className="compra">Realizar compra</button>
          <p className="icono-compra"><BsCartCheckFill color="white" size={20}/></p>
        </div>
      </div>
    </div>
  )
}

export default Cart
