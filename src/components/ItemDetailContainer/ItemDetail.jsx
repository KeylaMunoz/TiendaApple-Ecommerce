import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import "./itemdetailcontainer.css"

const ItemDetail = ({producto}) => {

  const {agregarProducto} = useContext(CartContext)

  

  const agregar = (contador) =>  {
    const productoCarrito = { ...producto, cantidad: contador}
    agregarProducto(productoCarrito)
    console.log(productoCarrito)
  }

  

  return (
    <div className="card-detail">
      <img className="img-detail" src={producto.imagen} />
      <h1 className="titulo-detail">{producto.nombre} </h1>
      <p className="descripcion">{producto.nombre} posee {producto.descripcion}, disponible en color {producto.color}.</p>
      <p className="precio-detail"> Precio: {producto.precio}USD </p>
      <ItemCount className="contador" producto = {producto} agregar={agregar}/>
    </div>
    
  )
}

export default ItemDetail
