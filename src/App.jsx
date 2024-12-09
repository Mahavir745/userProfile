import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import { Outlet } from 'react-router-dom'
import StoreDataProvider from './component/Store/data-store'


const App = () => {
  return (
    <StoreDataProvider>
    < Header/>
    <Outlet/>
    <Footer/>
    </StoreDataProvider>
  )
}

export default App