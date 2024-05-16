import { Link } from 'react-router-dom'
import './itemlistcontainer.css'

const Item = ({producto}) => {
  return (
    <Link to={`/detail/${producto.id}`} >
    <div className="card">
        <p className="titulo-card">{producto.nombre} {producto.descripcion}</p>          
        <img className="img-card" src={producto.imagen}/>
        <p className="precio-card">Precio: {producto.precio}USD</p>
    </div>
    </Link>
  )
}

export default Item
