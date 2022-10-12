import React from 'react'

import Header from './Components/Header/Header'
import { ModalProvider } from './context/ModalContext'
import ProductsList from './Pages/ProductList/ProductsList'

const App = () => {
  
  return (
    <div className="App">
      <ModalProvider>
        <Header />
        <ProductsList />
      </ModalProvider>
    </div>
  )
}

export default App
