import "./Products.css";
import { dataProducts } from "../../Services/dataProducts/dataProducts";
import { selectProductsLists } from "../../Services/dataProducts/react-redux/cartSlice";
import Product from "./Product";
import { useSelector } from "react-redux";

function Products() {
  const productsLists = useSelector(selectProductsLists);
  return (
    <div className="products_container container">
      <div className="products_content ">
        <h1 className="gen_title">Products</h1>
        <ul className="product_grid row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {dataProducts.map((item, index) => (
            <li key={item.id} className="li_prod">
              <Product
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                quantity={productsLists[index].quantity}
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
