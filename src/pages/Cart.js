import React, { useState, useEffect } from 'react';
import '../assets/styles/cart.css';

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <div>
                    <strong>{item.name}</strong> - ᖬ{item.price} x {item.quantity}
                  </div>
                  <div>
                    Quantity:
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-section">
            <h3>Total:</h3>
            <div className="total-price">ᖬ{total.toFixed(2)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;



