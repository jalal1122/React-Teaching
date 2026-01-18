import { Link, Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";

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
    </Routes>
  );
};

export default Router;
