
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../db/db.js';
import Loading from '../Loading/Loading.jsx';

import './itemlistcontainer.css';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)
  const {idCategoria} = useParams()

  const getProductos = () => {
    setLoading(true)
    const productosRef = collection(db, "productos")
    getDocs(productosRef)
    .then((productosDb) => {
      const data = productosDb.docs.map( (producto) => {
        return {id: producto.id, ...producto.data()}
      })
      setProductos(data)
    })
    .catch((error) => {
    console.log(error);
    })
    .finally(() => setLoading(false));
  }

  const traerProductosPorCategoria = () => {
    setLoading(true)

    const productosRef = collection(db, "productos")
    const q = query(productosRef, where("categoria", "==", idCategoria))
    getDocs(q)
    .then((productosDb) => {
      const data = productosDb.docs.map( (producto) => {
        return {id: producto.id, ...producto.data()}
      })
      setProductos(data)
    })
    .finally(() => setLoading(false))
  }

  //llamamos a la promesa y que se ejecute una sola ver con useEffect
  useEffect( () => {

    idCategoria ? traerProductosPorCategoria() : getProductos()
  
  }, [idCategoria]);


  return (
    <div>
        {
          loading ? <Loading/> : <ItemList productos = {productos} idCategoria = {idCategoria} />
        }
    </div>
  );
};

export default ItemListContainer
