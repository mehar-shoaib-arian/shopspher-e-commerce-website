function Wishlist() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">Saved Items</p>
        <h1>Wishlist</h1>
        <p>Save products you love and move them to cart later.</p>
      </div>

      <div className="empty-state">
        <h2>Your wishlist is empty</h2>
        <p>Click wishlist on a product to save it here.</p>
      </div>
    </section>
  );
}

export default Wishlist;
