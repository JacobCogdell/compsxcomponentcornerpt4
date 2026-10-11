import CartItem from "../components/CartItem";
import "./CartPage.css";

function CartPage({ cart, removeFromCart }) {
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <CartItem
            key={index}
            name={item.name}
            price={item.price}
            onRemove={() => removeFromCart(index)}
          />
        ))
      )}

      <h3 className="cart-total">Total: ${cartTotal.toFixed(2)}</h3>
    </div>
  );
}

export default CartPage;
