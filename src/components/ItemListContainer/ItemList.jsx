import Item from "./Item";
import VideoBanner from "../VideoBanner/VideoBanner";
import './itemlistcontainer.css'

const ItemList = ({productos, idCategoria}) => {

  const mayuscula = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div>
      <VideoBanner/> 
      <p className='titulo-categoria'>
        {idCategoria ? `${mayuscula(idCategoria)}` : "Apple"}
      </p> 
      <div className="contenedor-padre">
        {
          productos.map( (producto) => (
            <Item key={producto.id} producto = {producto} />
          ))
        }
      </div>
    </div>
  )
}

export default ItemList
