function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="product-card-body">
        <div className="product-meta">
          <span>{product.category}</span>
          <span className="rating">★ {product.rating}</span>
        </div>

        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="price">Rs. {product.price.toLocaleString()}</p>

        <div className="product-actions">
          <button type="button">Add to Cart</button>
          <button type="button" className="outline-btn">
            Wishlist
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
