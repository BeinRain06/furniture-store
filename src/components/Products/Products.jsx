import "./Products.css";
import { dataProducts } from "../../Services/dataProducts/dataProducts";
import { cartActions } from "../../Services/dataProducts/react-redux/cartSlice";
import {
  selectCartShowed,
  selectProductsLists,
  selectTotalQuantity,
} from "../../Services/dataProducts/react-redux/cartSlice";
import CartsMenu from "../Carts/CartsMenu";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";

function Products() {
  const dispatch = useDispatch();
  const productsLists = useSelector(selectProductsLists);
  const isCartShowed = useSelector(selectCartShowed);
  const totalQuantity = useSelector(selectTotalQuantity);

  const handleMenu = () => {
    dispatch(cartActions.setCartShowed(!isCartShowed));
  };

  return (
    <div className="products_container">
      <div className="products_content ">
        <div className="prods_title">
          <span className="gen_title1">Products</span>
          <span className="gen_title2">Products</span>
        </div>
        <div className="menu_wrap">
          <div className="menu" onClick={handleMenu}>
            <span className="circle_qty">
              {totalQuantity > 0 && totalQuantity}
            </span>
            <div
              className={isCartShowed ? `menu_content show` : `menu_content`}
            >
              <span className="show_menu">
                <i className="bi bi-sort-down"></i>
              </span>
              <span className="hide_menu">
                <i className="bi bi-list-check"></i>
              </span>
            </div>
          </div>
          <div className={isCartShowed ? `carts_menu showcase` : `carts_menu`}>
            <div className="carts_slide">
              <CartsMenu />
            </div>
          </div>
        </div>

        <ul className="product_grid">
          {dataProducts.map((item, index) => (
            <li key={item.id} className="li_prod">
              <Product
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                quantity={productsLists[index].quantity ?? 0}
                totalPrice={item.totalPrice}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
