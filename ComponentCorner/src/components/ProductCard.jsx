import './ProductCard.css';

export default function ProductCard({ name, price, image, description, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />

      <h3 className="product-name">{name}</h3>

      <p className="product-price">${price}</p>

      <p className="product-description">{description}</p>

      <button 
        className="add-to-cart-button"
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
