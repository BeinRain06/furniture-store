import "./Product.css";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrency } from "../../Services/dataProducts/react-redux/cartSlice";
import { cartActions } from "../../Services/dataProducts/react-redux/cartSlice";

function Product({ id, name, img, quantity, price, totalPrice }) {
  const currency = useSelector(selectCurrency);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        quantity,
        price,
        totalPrice,
      })
    );
  };

  const removeFromCart = () => {
    dispatch(
      cartActions.removeFromCart({
        id,
        quantity,
        totalPrice,
      })
    );
  };

  return (
    <div className="product_wrapper">
      <div className="product_content d-flex flex-column">
        <img src={img} alt="src_product" className="img_product" />
        <span className="title_product">{name}</span>
        <div className="panel_cmd d-flex flex-row">
          <div className="price_wrapper">
            <span className="price">{price}</span>
            <span className="currency">{currency}</span>
          </div>
          <button className="add_to_cart btn-success" onClick={addToCart}>
            Add To Cart
            <span className="count pd-2">{quantity >= 1 && quantity}</span>
          </button>
          {quantity >= 1 && (
            <button
              className="remove_from_cart btn-warning"
              onClick={removeFromCart}
            >
              Remove From Cart
            </button>
          )}
        </div>
        .
      </div>
    </div>
  );
}

export default Product;
