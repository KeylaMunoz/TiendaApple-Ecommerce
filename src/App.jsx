import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {

  //De este lado va todas las funciones y logicas que quiera agregarle a mi proyecto y pasarle como parametro
    const saludo = "holaaaaaa";
  
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path='/' element= {<ItemListContainer saludo = "¡Bienvenidos a mi Ecommerce!" />} />
        <Route path='/categoria/:idCategoria' element= {<ItemListContainer/>}/>
        <Route path='/detail/:idProducto' element={<ItemDetailContainer/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
