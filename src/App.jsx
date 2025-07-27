import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './Context/CartContext'



function App() {
 
  return (

    <CartContextProvider>
        
      <BrowserRouter>
        <Navbar />         
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='' element={<h2>404 - not found</h2>} />
        </Routes>
      </BrowserRouter>

    </CartContextProvider>
    
  )
}

export default App
