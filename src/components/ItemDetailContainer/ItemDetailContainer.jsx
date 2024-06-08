import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { toast } from 'react-toastify'
import db from "../../db/db.js";
import Loading from "../Loading/Loading.jsx";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(false)
    const {idProducto} = useParams();

    const traerProducto = () => {
      const productoRef = doc(db, "productos", idProducto)
      getDoc(productoRef)
        .then((productoDb) => {
          const data = {id: productoDb.id, ...productoDb.data()}
          setProducto(data)
        })
        .catch((error) => {
          toast.error("Este producto no existe");
          console.log(error)
        })
        .finally(() => {
         setLoading(false)
        });
    }

    useEffect( () => {
      traerProducto()
      setLoading(true)
  }, [idProducto]);

  return (
    <div>
      {loading ? <Loading/> : <ItemDetail producto = {producto}/>}
    </div>
  )}
  
export default ItemDetailContainer;
