import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { toast } from 'react-toastify'
import db from "../../db/db.js";
import Loading from "../Loading/Loading.jsx";
import { MdError } from "react-icons/md";

import './itemdetailcontainer.css'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(false);
    const [productoNoExiste, setProductoNoExiste] = useState(false);
    const {idProducto} = useParams();

    const traerProducto = () => {
      const productoRef = doc(db, "productos", idProducto)
      getDoc(productoRef)
        .then((productoDb) => {
           if (!productoDb.exists()) {
             setProductoNoExiste(true);
             console.log("Este producto no existe");
           }else{
             const data = { id: productoDb.id, ...productoDb.data() };
             setProducto(data);
           }
          })
          .catch((error) => {
            toast.error(error);
          })
          .finally(() => {
          setLoading(false)
          });
    }

  useEffect( () => {
    traerProducto()
    setProductoNoExiste()
    setLoading(true)
  }, [idProducto]);

  const noExiste = () => (
    <div>
      <p className="titulo-noExiste"><MdError className="icono-error"/>El producto que buscas no existe.</p>
      <Link to='/' className="link-volver"><button className="boton-volver">Volver</button></Link>
    </div>
)
    return (
      <div>
        {loading ? <Loading/> : productoNoExiste ? noExiste() : <ItemDetail producto = {producto}/> }
      </div>
    )}

export default ItemDetailContainer;
