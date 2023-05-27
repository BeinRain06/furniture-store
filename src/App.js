/* import logo from './logo.svg'; */
import "./App.css";
import Products from "./components/Products/Products";
import Carts from "./components/Carts/Carts";

function App() {
  return (
    <div className="App">
      <div className="App_container">
        <Products />
        {/*  <div className="carts_desktop">
          <Carts />
        </div> */}
      </div>
    </div>
  );
}

export default App;
