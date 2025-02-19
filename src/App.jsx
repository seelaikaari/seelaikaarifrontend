//Components
import NavBar from "./Components/NavBar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";
import ProductDetail from "./Pages/productDetail/ProductDetail.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Wishlist from "./Pages/wishlist/Wishlist.jsx";
import LoginSignup from "./Pages/LoginSignup/LoginSignup.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import { Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Termsandconditions from "./Pages/terms/Termsandconditions.jsx";
import Policy from "./Pages/policies/Policy.jsx";
import Account from "./Pages/account/Account.jsx";
import Stories from "./Pages/stories/Stories.jsx";
import { Navigate } from "react-router-dom";
//Css
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, setUser } from "./features/users/authSlice.js";
import { useEffect } from "react";
import axios from "axios";
import { fetchaddtoCard } from "./api/fetchAddtocard.js";
import { fetchProducts } from "./api/fetchProduct.js";
import { fetchWishlist } from "./api/fetchwishlist.js";
import ResetPassword from "./Pages/resetpassword/ResetPassword.jsx";
import ProtectedResetRoute from "./Pages/resetpassword/ProtectedResetRoute.jsx";
const api = "http://localhost:5000";

const ProtectedRoute = ({ isLogin, routeName, children }) => {
    useEffect(() => {
        if (!isLogin && routeName === "checkout") {
            toast.warning("Please login before checkout!");
        }
    }, [isLogin, routeName]); // Run effect when isLogin or routeName changes

    return isLogin ? children : <Navigate to="/login" />;
};

function App() {
  const { isLogin, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(setLoading(true));
    if (token) {
      axios
        .post(
          `${api}/api/users/validate-token`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          console.log(res);
          dispatch(setUser(res.data.user));
        })
        .catch(() => localStorage.removeItem("token"))
        .finally(() => {
          dispatch(setLoading(false));
        });
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      dispatch(fetchaddtoCard(user.id));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user) {
      dispatch(fetchWishlist(user.id));
    }
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route
            path="/Checkout"
            element={
              <ProtectedRoute isLogin={isLogin} routeName={"checkout"}>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route path="/Termsandconditions" element={<Termsandconditions />} />
          <Route path="/Policy" element={<Policy />} />
          <Route
            path="/reset-password"
            element={
              <ProtectedResetRoute>
                <ResetPassword />
              </ProtectedResetRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute isLogin={isLogin} routeName={"account"}>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="/Stories" element={<Stories />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
