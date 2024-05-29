import obtenerProductos from '../../data/data';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

import './itemlistcontainer.css';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)
  const {idCategoria} = useParams()

  //llamamos a la promesa y que se ejecute una sola ver con useEffect
useEffect( () => {

  setLoading(true)

  obtenerProductos()
  .then((respuesta) => {
    if(idCategoria){
      const productosFilter = respuesta.filter ( (productoRes) => productoRes.categoria === idCategoria)
      setProductos(productosFilter)

    }else{
      setProductos(respuesta)
    }
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    setLoading(false)
  });
}, [idCategoria]);


  return (
    <div>
        {
          loading ? <img className='img-loading' src="https://global.discourse-cdn.com/sitepoint/original/3X/e/3/e352b26bbfa8b233050087d6cb32667da3ff809c.gif" alt="" /> : <ItemList productos = {productos} idCategoria = {idCategoria} />
        }
    </div>
  );
};

export default ItemListContainer
