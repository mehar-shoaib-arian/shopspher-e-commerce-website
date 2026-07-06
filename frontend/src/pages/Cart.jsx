function Cart() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">Shopping Bag</p>
        <h1>Cart</h1>
        <p>Review cart items, update quantity, and check your order total.</p>
      </div>

      <div className="empty-state">
        <h2>Your cart is empty</h2>
        <p>Add products to your cart and they will appear here.</p>
      </div>
    </section>
  );
}

export default Cart;
