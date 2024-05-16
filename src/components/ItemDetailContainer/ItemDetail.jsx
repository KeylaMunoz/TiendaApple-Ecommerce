import "./itemdetailcontainer.css"

const ItemDetail = ({producto}) => {
  return (
    <div className="card-detail">
      <img className="img-detail" src={producto.imagen} />
      <h1 className="titulo-detail">{producto.nombre} </h1>
      <p className="descripcion">Este producto posee {producto.descripcion}, disponible en color {producto.color}. {producto.stock} unidades disponibles. </p>
      <h2 className="precio-detail"> Precio: {producto.precio}USD </h2>
    </div>
    
  )
}

export default ItemDetail
