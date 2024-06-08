import { useState } from "react"
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import { toast } from "react-toastify";

import "./itemcount.css"

const ItemCount = ({producto, agregar}) => {
    const [contador, setContador] = useState(1)

const handleClickRestar = () => {
    if(contador > 1) {
        setContador (contador - 1)
    }
}

const handleClickSumar = () => {
    if (contador < producto.stock ) {
        setContador (contador + 1)
    }
}

const handleClickAgregarCArrito = () => {
    agregar(contador)
    toast.success("Producto agregado al Carrito")
}


  return (
    <div className="contenedor-contador">
        <IoRemoveCircleOutline size={22} className="restar-contador" color="#198a8a" onClick={handleClickRestar}/>
        <p className="p-contador">{contador}</p>
        <IoIosAddCircleOutline size={22} className="sumar-contador" color="#198a8a" onClick={handleClickSumar}/>
        <div className="contenedor-agregar-carrito">
            <button className="agregar-carrito" onClick={handleClickAgregarCArrito}>Agregar al Carrito </button>
            <p className="icono-agregar-carrito" >
            <BsCartPlus className="estilo-icono-carrito"/>
        </p>
        </div>
    </div>
  )
}

export default ItemCount
