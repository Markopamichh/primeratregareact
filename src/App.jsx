
import './App.css'
import NavBar from './components/NavBar.jsx'
import Container from './components/Container.jsx'
import React from 'react'
import cart from "./components/CartWidget.jsx"

function App() {
  return (
    <>
      <NavBar />
      <Container saludo="Hola Mundo" />
    
    </>
  )
}

export default App