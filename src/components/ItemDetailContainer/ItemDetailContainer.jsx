import { useState, useEffect } from "react"
import obtenerProductos from "../../data/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const {idProducto} = useParams();

    useEffect( () => {
      obtenerProductos()
        .then((respuesta) => {
          const productoFind = respuesta.find ((productoRes) => productoRes.id===idProducto)
          setProducto(productoFind);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("finalizado")
        });
  }, []);

  return (
    <ItemDetail producto = {producto}/>
  )}
  
export default ItemDetailContainer
