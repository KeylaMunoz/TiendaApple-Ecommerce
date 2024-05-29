import { useState, useEffect } from "react"
import obtenerProductos from "../../data/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(false)
    const {idProducto} = useParams();

    useEffect( () => {
      
    setLoading(true)

      obtenerProductos()
        .then((respuesta) => {
          const productoFind = respuesta.find ((productoRes) => productoRes.id===idProducto)
          setProducto(productoFind);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false)
        });
  }, []);

  return (
    <div>
      {
        loading ? <img className='img-loading' src="https://global.discourse-cdn.com/sitepoint/original/3X/e/3/e352b26bbfa8b233050087d6cb32667da3ff809c.gif" alt="" /> :<ItemDetail producto = {producto}/>
      }
    </div>
  )}
  
export default ItemDetailContainer
