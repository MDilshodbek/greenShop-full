import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import Product from "./pages/product";
import ShoppingCart from "./pages/shopping-cart";
import ProCheckout from "./pages/proCheckout";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:category/:productId" element={<Product />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/product-checkout" element={<ProCheckout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
