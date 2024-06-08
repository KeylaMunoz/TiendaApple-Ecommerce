import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import Formulario from './Formulario'
import validacionForm from '../../utils/validationYup.js'
import db from "../../db/db.js"
import { toast } from 'react-toastify'

import './formulario.css'

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre:"",
    telefono: "",
    email:"",
    confirmarEmail:""
  })

  const [idOrden, setIdOrden] = useState(null)
  const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

  const handleChangeInput = (event) => {
    //modificamos variable de estado con la info de cada input
    setDatosForm({...datosForm, [event.target.name]: event.target.value })
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const orden = {
      comprador: {...datosForm},
      productos: [...carrito ],
      fecha: Timestamp.fromDate(new Date()),
      total: precioTotal()
    };
    
    try {
      const response = await validacionForm(datosForm)
      if(response.status === "exitoso") {
        generarOrden(orden)
        toast.success("¡Orden enviada con éxito!");
      } else {
        toast.warning(response.message);
      }
    } catch (error) {
      toast.error("Hubo un problema");
    }
  };
  
  const generarOrden = (orden) => {
    const ordenesRef = collection (db, "ordenes")
    addDoc(ordenesRef, orden)
    .then((respuesta) => setIdOrden(respuesta.id))
    .catch((error) => console.log(error))
    .finally(() => {
      actualizarStock()
      vaciarCarrito()
    })
  };

  const actualizarStock = () => {
    carrito.map((productoCarrito) => {
      let cantidad = productoCarrito.cantidad
      delete productoCarrito.cantidad

      const productoRef = doc(db, "productos", productoCarrito.id)
      setDoc(productoRef, {...productoCarrito, stock: productoCarrito.stock - cantidad})
    
    })
  }


   return (
    <div>
      {idOrden ? (
          <div>
            <p className='titulo2-orden'>¡Tu orden se generó con éxito!</p>
            <p className='numero-id'> Copia el siguiente codigo para poder seguir tu orden: <strong>{idOrden}</strong> </p>
            <Link className='link-tienda' to= "/"> <button className='tienda'>Tienda</button> </Link>
          </div>
        ) : ( 
        <Formulario 
          datosForm={datosForm} 
          handleChangeInput={handleChangeInput} 
          handleSubmitForm={handleSubmitForm} 
          />
        )}
    </div>
  )
}

export default Checkout
