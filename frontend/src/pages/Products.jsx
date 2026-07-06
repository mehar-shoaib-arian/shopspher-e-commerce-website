import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../utils/shopData";

function Products() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || "";

  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchTerm
      ? `${product.name} ${product.description} ${product.category}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      : true;

    const matchesCategory = selectedCategory
      ? product.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">ShopSphere Catalog</p>
        <h1>Products</h1>
        {searchTerm ? (
          <p>
            Showing product results for <strong>{searchTerm}</strong>.
          </p>
        ) : selectedCategory ? (
          <p>
            Showing products in <strong>{selectedCategory}</strong>.
          </p>
        ) : (
          <p>Browse products with images, prices, ratings, and categories.</p>
        )}
      </div>

      <div className="products-toolbar">
        <span>{filteredProducts.length} products found</span>
        <div className="category-pills">
          {categories.map((category) => (
            <a
              href={`/products?category=${encodeURIComponent(category.name)}`}
              className={selectedCategory === category.name ? "active" : ""}
              key={category.id}
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid catalog-grid">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No products found</h2>
          <p>
            Try searching for electronics, fashion, home, or beauty products.
          </p>
        </div>
      )}
    </section>
  );
}

export default Products;
