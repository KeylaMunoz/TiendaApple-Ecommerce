import { Link } from 'react-router-dom'
import './itemlistcontainer.css'

const Item = ({producto}) => {
  return (
    <Link to={`/detail/${producto.id}`} className='link-card'>
    <div className="card">
        <img className="img-card" src={producto.imagen}/>
        <p className="titulo-card">{producto.nombre}</p>          
        <p className="precio-card">Precio: {producto.precio}USD</p>
    </div>
    </Link>
  )
}

export default Item
