import React from "react";
import Products from "./components/Products";
import vschoolProduct from "./components/vschoolProduct";

function App() {
  const ProductComponent = vschoolProduct.map(product =>  <Products key={product.id} item={product} />)
  return (
    <div>
      {ProductComponent}
    </div>
  )
}

export default App;