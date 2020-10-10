import React from "react";

function Products(props) {

  return(
    <div>
      <h3>Name: {props.item.name}</h3>
      <h3>Price: {props.item.price.toLocaleString("en-US", {style: "currency", currency: "NGN"})} - {props.item.description}</h3>
    </div>
  )
}

export default Products;