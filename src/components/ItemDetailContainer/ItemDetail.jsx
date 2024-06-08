import ItemCount from "../ItemCount/ItemCount"
import  { CartContext } from "../../context/CartContext"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import "./itemdetailcontainer.css"

const ItemDetail = ({producto}) => {

  const {agregarProducto} = useContext(CartContext)
  const [agregado, setAgregado] = useState(false);
  

  const agregar = (contador) =>  {
    const productoCarrito = { ...producto, cantidad: contador}
    agregarProducto(productoCarrito)
    console.log(productoCarrito)
    setAgregado(true)
  }

  

  return (
    <div className="card-detail">
      <img className="img-detail" src={producto.imagen} />
      <h1 className="titulo-detail">{producto.nombre} </h1>
      <p className="descripcion">{producto.nombre} posee {producto.descripcion}, disponible en color {producto.color}.</p>
      <p className="precio-detail"> Precio: {producto.precio}USD </p>
      { agregado ? <Link to="/cart" className="ir-carrito" >Ir al carrito</Link> : 
      <ItemCount className="contador" producto = {producto} agregar={agregar}/>}
    </div>
    
  )
}

export default ItemDetail
