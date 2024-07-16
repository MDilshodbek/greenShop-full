import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import Product from "./pages/product";
import ShoppingCart from "./pages/shopping-cart";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:category/:productId" element={<Product />} />
        <Route path="/shopping-cart" element={<ShoppingCart/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
