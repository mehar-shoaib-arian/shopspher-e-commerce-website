import ProductCard from "../components/ProductCard";
import {
  adminDeliveries,
  adminStats,
  salesByCategory,
  topSellingProducts,
} from "../utils/shopData";

const formatCurrency = (amount) => `Rs. ${amount.toLocaleString()}`;

function AdminDashboard() {
  return (
    <section className="admin-page page reveal-page">
      <div className="admin-hero">
        <div className="admin-profile-card">
          <div className="admin-avatar-ring">
            <img
              src="/admin-profile.png"
              alt="ShopSphere admin profile"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = "/admin-profile.svg";
              }}
            />
          </div>
          <div>
            <p className="eyebrow">Admin Panel</p>
            <h1>Welcome back, Shoaib</h1>
            <p>
              Review sales, product performance, pending deliveries, and daily
              store activity from one dashboard.
            </p>
          </div>
        </div>
        <div className="admin-hero-actions">
          <button type="button">Add Product</button>
          <button type="button" className="ghost-admin-btn">
            Export Report
          </button>
        </div>
      </div>

      <div className="admin-stats-grid">
        {adminStats.map((stat) => (
          <article className="admin-stat-card" key={stat.label}>
            <span>{stat.icon}</span>
            <p>{stat.label}</p>
            <h2>{stat.value}</h2>
            <small>{stat.trend}</small>
          </article>
        ))}
      </div>

      <div className="admin-grid">
        <section className="admin-card sales-card">
          <div className="admin-card-heading">
            <div>
              <p className="eyebrow">Sales Overview</p>
              <h2>Revenue by category</h2>
            </div>
            <strong>{formatCurrency(316250)}</strong>
          </div>

          <div className="sales-bars">
            {salesByCategory.map((item) => (
              <div className="sales-row" key={item.category}>
                <div className="sales-label">
                  <span>{item.category}</span>
                  <strong>{formatCurrency(item.sales)}</strong>
                </div>
                <div className="sales-track">
                  <span style={{ width: `${item.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="admin-card delivery-card">
          <div className="admin-card-heading">
            <div>
              <p className="eyebrow">Deliveries</p>
              <h2>Order delivery status</h2>
            </div>
            <span className="live-pill">Live</span>
          </div>

          <div className="delivery-list">
            {adminDeliveries.map((delivery) => (
              <article className="delivery-item" key={delivery.id}>
                <img src={delivery.image} alt={delivery.product} />
                <div>
                  <h3>{delivery.product}</h3>
                  <p>
                    {delivery.customer} • {delivery.city}
                  </p>
                </div>
                <span
                  className={`status-chip ${delivery.status.toLowerCase().replaceAll(" ", "-")}`}
                >
                  {delivery.status}
                </span>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="admin-card">
        <div className="admin-card-heading">
          <div>
            <p className="eyebrow">Product Sales</p>
            <h2>Top selling products</h2>
          </div>
          <span className="admin-note">This month</span>
        </div>

        <div className="admin-product-table">
          {topSellingProducts.map((product, index) => (
            <article className="admin-product-row" key={product.id}>
              <span className="rank">#{index + 1}</span>
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>
              <strong>{product.sold} sold</strong>
              <span>{formatCurrency(product.revenue)}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section admin-products-preview">
        <div className="section-heading with-link">
          <div>
            <p className="eyebrow">Inventory Preview</p>
            <h2>Products managed by admin</h2>
            <p>Quick view of products currently shown in the storefront.</p>
          </div>
        </div>
        <div className="product-grid">
          {topSellingProducts.slice(0, 4).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default AdminDashboard;
