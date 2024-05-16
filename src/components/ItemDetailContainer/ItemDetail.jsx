const ItemDetail = ({producto}) => {
  return (
    <div className="card-detail">
      <img className="img-detail" src={producto.imagen} />
      <h1 className="titulo-detail">{producto.nombre} </h1>
      <p className="precio-detail">Precio: {producto.precio}</p>
    </div>
    
  )
}

export default ItemDetail
