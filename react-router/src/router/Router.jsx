import { Link, Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ProductDetail from "../Pages/ProductDetail";
import Signin from "../Pages/Signin";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/contact"
        element={
          <h1>
            Contact Page - go back to <Link to="/">home page</Link>
          </h1>
        }
      />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default Router;
