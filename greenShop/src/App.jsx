import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import Product from "./pages/product";
import ShoppingCart from "./pages/shopping-cart";
import ProCheckout from "./pages/proCheckout";
import Profile from "./components/profile";
import { dashboard_mock } from "./utils/mock";
import useAuth from "./configs/auth";

function App() {
  const { isAuthed } = useAuth();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:category/:productId" element={<Product />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/product-checkout" element={<ProCheckout />} />
        {isAuthed() && (
          <Route path="/profile" element={<Profile />}>
            {dashboard_mock.map(({ path, Component, _id }) => (
              <Route key={_id} path={path} element={<Component />} />
            ))}
          </Route>
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
