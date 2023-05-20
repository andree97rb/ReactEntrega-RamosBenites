import './CartWidget.css';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const cartItems = 3;

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon text-white" />
      {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
    </div>
  );
}

export default CartWidget;
