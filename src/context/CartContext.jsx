import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])


    const agregarProducto = (nuevoProducto) => {
        const condicion = productoDuplicado(nuevoProducto.id)
        if(condicion){
           const productosModificados = carrito.map ( (productoCarrito) => {
            if(productoCarrito.id === nuevoProducto.id){
                return {...productoCarrito, cantidad: productoCarrito.cantidad + nuevoProducto.cantidad}
            }else{
                return productoCarrito
            }
           }) 
           setCarrito (productosModificados)
        }else{
            setCarrito([ ...carrito, nuevoProducto])
        }
    }
    

    const productoDuplicado = (idProducto) => {
        const condicion = carrito.some( (productoCarrito) => productoCarrito.id === idProducto )
        return condicion;
    }


    const cantidadTotal = () => {
        const cantidadTotalProd = carrito.reduce( (total, producto) => 
        total + producto.cantidad, 0)
        return cantidadTotalProd;
    }

    
    const borrarProductoId = (idProducto) => {
        const prodFiltrados = carrito.filter( (productoCarrito) => productoCarrito.id !== idProducto )
        setCarrito(prodFiltrados)
    }


    const precioTotal = () => {
        const totalCompra = carrito.reduce ((total, productoCarrito) => total + (productoCarrito.cantidad * productoCarrito.precio), 0)
        return totalCompra 
    }
    
    const vaciarCarrito = () => {
        setCarrito([]);
    }


    return(
        <CartContext.Provider value={ { carrito, agregarProducto, cantidadTotal, vaciarCarrito, borrarProductoId, precioTotal } }>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext}