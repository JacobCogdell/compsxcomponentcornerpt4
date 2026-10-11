import './CartItem.css';

export default function CartItem({ name, price, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <p className="cart-item-name">{name}</p>
        <p className="cart-item-price">${price}</p>
      </div>

      <button 
        className="remove-button"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
}
