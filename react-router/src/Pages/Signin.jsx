import React from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Signin = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate
    navigate("/about")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" className="border-2" />
        <input type="password" name="password" className="border-2" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
