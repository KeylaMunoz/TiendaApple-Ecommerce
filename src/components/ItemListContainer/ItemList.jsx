import Item from "./Item"
import './itemlistcontainer.css'

const ItemList = ({productos}) => {
  return (
    <div className="contenedor-padre">
      {
          productos.map( (producto) => (
            <Item key={producto.id} producto = {producto} />
          ))
       }
    </div>
  )
}

export default ItemList
