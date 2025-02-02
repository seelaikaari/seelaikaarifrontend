
//Components
import NavBar from "./Components/NavBar/Navbar"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Product from "./Pages/Product/Product"
import { Route,Routes } from "react-router-dom"; 
//Css
import './App.css'

function App() {

  return (
    <>
      <NavBar/>

      <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Product" element={<Product/>} />
          </Routes>
      </main>


    </>
  )
}

export default App
