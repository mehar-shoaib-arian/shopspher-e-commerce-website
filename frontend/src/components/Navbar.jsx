import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchTerm.trim();

    if (query) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" aria-label="ShopSphere Home">
          ShopSphere
        </Link>

        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
          />
          <button type="submit">Search</button>
        </form>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/wishlist">Wishlist</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/admin">Admin</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
