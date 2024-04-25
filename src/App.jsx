import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

    const saludo = "holaaaaaa";
  
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo = "¡Bienvenidos a mi Ecommerce!" />
    </div>
  )
}

export default App
