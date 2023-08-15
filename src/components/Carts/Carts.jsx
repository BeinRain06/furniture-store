import "./Carts.css";
import { useSelector } from "react-redux";
import {
  selectMyCartProducts,
  selectCurrency,
  selectTotalQuantity,
  selectEntireBill,
} from "../../Services/dataProducts/react-redux/cartSlice";
import Cart from "./Cart";

function Carts() {
  const myCartProducts = useSelector(selectMyCartProducts);
  const currency = useSelector(selectCurrency);
  const totalQuantity = useSelector(selectTotalQuantity);
  const entireBill = useSelector(selectEntireBill);

  return (
    <div className="carts_container col-10 col-sm-10 col-md-4">
      <div className="carts_content">
        <div className="show_carts d-flex">
          <span className="title_carts">Shopping Cart </span>
          <div className="account_in_carts d-flex ">
            <p>
              Carts Items <span className="in_carts">{totalQuantity} </span>
            </p>
          </div>
        </div>
        <ul className="carts_media">
          {myCartProducts.length > 0 ? (
            myCartProducts.map((item, index) => (
              <li key={item.id} className="carts_pro">
                <Cart
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  totalPrice={item.totalPrice}
                />
              </li>
            ))
          ) : (
            <div className="empty_cart">
              <p>Cart is empty</p>
            </div>
          )}
        </ul>
        <div className="entire_bill">
          <span className="my_bill d-flex flex-center">
            Total : {entireBill}
          </span>
          <span className="design_currency">{currency}</span>
        </div>
      </div>
    </div>
  );
}

export default Carts;
