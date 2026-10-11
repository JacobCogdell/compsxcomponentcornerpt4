import { Link } from "react-router-dom";

function Header({ storeName, cartCount }) {
  return (
    <header style={{ padding: "20px" }}>
      <h1>{storeName}</h1>

      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;
