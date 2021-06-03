import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="row">
      <div>
        <Link className="brand" to="/">
          amazona
        </Link>
      </div>
      <div>
        <Link to="/cart">Cart</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
  );
}
