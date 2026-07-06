import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import {
  bestSellerProducts,
  categories,
  featuredProducts,
  latestProducts,
} from "../utils/shopData";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Welcome to ShopSphere</p>
          <h1>Shop everything you love in one place.</h1>
          <p>
            Browse products, discover deals, save favorites, and build your cart
            with a modern MERN e-commerce experience.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="primary-btn">
              Shop Now
            </Link>
            <Link to="/register" className="secondary-btn">
              Create Account
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading with-link">
          <div>
            <h2>Categories</h2>
            <p>Find products by your favorite shopping category.</p>
          </div>
          <Link to="/products" className="section-link">
            View All
          </Link>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading with-link">
          <div>
            <h2>Featured Products</h2>
            <p>Popular picks with clear images for your homepage.</p>
          </div>
          <Link to="/products" className="section-link">
            Shop Featured
          </Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      <section className="section image-banner">
        <div>
          <p className="eyebrow">Limited Deals</p>
          <h2>Upgrade your cart with trending products.</h2>
          <p>
            Add electronics, fashion, home essentials, and beauty products with
            attractive product images across every section.
          </p>
          <Link to="/products" className="primary-btn">
            Explore Deals
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading with-link">
          <div>
            <p className="eyebrow">Best Sellers</p>
            <h2>Products your customers will love.</h2>
            <p>These top-selling items now display product images.</p>
          </div>
          <Link to="/products" className="section-link">
            View Best Sellers
          </Link>
        </div>
        <div className="product-grid">
          {bestSellerProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading with-link">
          <div>
            <p className="eyebrow">Latest Products</p>
            <h2>Fresh arrivals for your store.</h2>
            <p>New product cards with real images for a complete storefront.</p>
          </div>
          <Link to="/products" className="section-link">
            See Latest
          </Link>
        </div>
        <div className="product-grid">
          {latestProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
