import "./Cart.css";
import { cartActions } from "../../Services/dataProducts/react-redux/cartSlice";
import {
  selectCurrency,
  selectMyCartProducts,
} from "../../Services/dataProducts/react-redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function Cart({ id, name, price, quantity, totalPrice }) {
  const dispatch = useDispatch();
  const currency = useSelector(selectCurrency);
  const myCartProducts = useSelector(selectMyCartProducts);
  const deleteOfCart = () => {
    dispatch(cartActions.deleteOfCart({ id, quantity, totalPrice }));
    console.log(myCartProducts);
  };

  return (
    <div className="cart_item d-flex">
      <div className="left_ct d-flex">
        <i className="bi bi-x" onClick={deleteOfCart}></i>
        <span className="ct_name">{name}</span>
        <span className="ct_account">{quantity}</span>
      </div>
      <span className="single_price">{`price: ${price} `}</span>
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
