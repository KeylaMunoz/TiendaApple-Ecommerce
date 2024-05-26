import obtenerProductos from '../../data/data';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

import './itemlistcontainer.css';

const ItemListContainer = ({saludo}) => {
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
        loading ? <img style={{width:"500px"}} src="https://i.pinimg.com/originals/ff/18/c9/ff18c973fdc537fcfaeb2dce46104586.gif" alt="" /> : <ItemList productos = {productos} />
      }

         
    </div>
  );
};

export default ItemListContainer
