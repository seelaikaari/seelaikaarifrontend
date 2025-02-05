
//Components
import NavBar from "./Components/NavBar/Navbar"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Product from "./Pages/Product/Product"
import ProductDetail from "./Pages/productDetail/ProductDetail.jsx"
import SignupForm from "./Pages/siginup/SignUp.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Wishlist from "./Pages/wishlist/Wishlist.jsx"
import LoginSignup from "./Pages/LoginSignup.jsx/LoginSignup.jsx"
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
            <Route path="/Cart" element={<Cart/>} />
            <Route path="/Wishlist" element={<Wishlist/>} />
            <Route path="/ProductDetail" element={<ProductDetail/>} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
      </main>
      <Footer/>
    </>
  )
}
export default App
