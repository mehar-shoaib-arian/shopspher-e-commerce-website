import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(category.name)}`}
      className="category-card"
    >
      <img src={category.image} alt={category.name} loading="lazy" />
      <div className="category-content">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
      </div>
    </Link>
  );
}

export default CategoryCard;
