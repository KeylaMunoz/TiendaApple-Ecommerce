import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';

import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <ToastContainer theme='dark' autoClose={2000}/>
        <Routes>
          <Route path='/' element= {<ItemListContainer/>}/>
          <Route path='/categoria/:idCategoria' element= {<ItemListContainer/>}/>
          <Route path='/detail/:idProducto' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={< Checkout />} />
        </Routes>
        <Footer/>
      </CartProvider>   
    </BrowserRouter>
  )
}

export default App;
