import obtenerProductos from '../../data/data';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

import './itemlistcontainer.css';

const ItemListContainer = ({saludo}) => {
  const [productos, setProductos] = useState([]) 
  const {idCategoria} = useParams()
  
  //llamamos a la promesa y que se ejecute una sola ver con useEffect
  useEffect( () => {
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
          console.log("finalizado")
        });
  }, [idCategoria]);
  return (
    <div>
        <ItemList productos = {productos} />
    </div>
  );
};

export default ItemListContainer
