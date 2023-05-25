import "./Cart.css";
import { selectCurrency } from "../../Services/dataProducts/react-redux/cartSlice";
import { useSelector } from "react-redux";

function Cart({ id, name, price, quantity, totalPrice }) {
  const currency = useSelector(selectCurrency);

  return (
    <div className="cart_item d-flex">
      <div className="left_ct d-flex">
        <i className="bi bi-x"></i>
        <span className="ct_name">{name}</span>
        <span className="ct_account">{quantity}</span>
      </div>
      <span className="single_price">{price}</span>
      <div className="right_ct">
        <span className="ct_price">
          <strong>{totalPrice}</strong>
        </span>
        <span className="ct_currency">{currency} </span>
      </div>
    </div>
  );
}

export default Cart;
