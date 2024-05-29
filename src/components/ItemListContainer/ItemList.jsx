import Item from "./Item"
import './itemlistcontainer.css'

const ItemList = ({productos, idCategoria}) => {

  const mayuscula = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div>
      <div className="contenedor-publicidad">
         <div className="contenedor-video">
          <video loop autoPlay  className="video" >
            <source src="https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge.mp4"/>
          </video>
        </div>
      </div>
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
