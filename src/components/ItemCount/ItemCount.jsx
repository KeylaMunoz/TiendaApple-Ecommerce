import { useState } from "react"
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoRemoveCircleOutline } from "react-icons/io5";

import "./itemcount.css"

const ItemCount = ({producto, agregar}) => {
    const [contador, setContador] = useState(1)

const handleClickRestar = () => {
    if(contador > 1) {
        setContador (contador - 1)
    }
}

const handleClickSumar = () => {
    if (contador <= producto.stock ) {
        setContador (contador + 1)
    }
}

const handleClickAgregarCArrito = () => {
    agregar(contador)
}


  return (
    <div className="contenedor-contador">
        <IoRemoveCircleOutline size={22} className="restar-contador" onClick={handleClickRestar}/>
        <p className="p-contador">{contador}</p>
        <IoIosAddCircleOutline size={22} className="sumar-contador" onClick={handleClickSumar}/>
        <button className="agregar-carrito" onClick={handleClickAgregarCArrito}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount
