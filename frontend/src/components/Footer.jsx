import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>ShopSphere</h3>
        <p>Your trusted online shopping destination for everyday essentials.</p>
      </div>

      <div className="footer-column">
        <h4>Shop</h4>
        <Link to="/products">Products</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <div className="footer-column">
        <h4>Account</h4>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin Panel</Link>
      </div>

      <div className="footer-column">
        <h4>Support</h4>
        <p>Help Center</p>
        <p>Returns</p>
        <p>Contact Us</p>
      </div>
    </footer>
  );
}

export default Footer;
