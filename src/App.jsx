import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import './App.css'

function App() {

  
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>

        <Routes>
          <Route path='/' element= {<ItemListContainer/>}
          />
          <Route path='/categoria/:idCategoria' element= {<ItemListContainer/>}
          />
          <Route path='/detail/:idProducto' element={<ItemDetailContainer/>}
          />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </CartProvider>   
    </BrowserRouter>
  )
}

export default App;
