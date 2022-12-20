import { useState } from "react";

export default function Product() {
  // const products = ["Laptop", "Phone", "Modem", "Computer"]; //inefficient way to declare lists

  //The following method requires you to assign and check unique keys of the list
  // const products = [
  //   { id: 1, name: "Laptop", price: 500 },
  //   { id: 2, name: "Phone", price: 1200 },
  //   { id: 3, name: "Mobile", price: 444 },
  // ];
  // const productList = products.map((product) => (
  //   <h3 key={product.id}>{product.name}</h3>
  // ));

  //This method will make use of index as the key
  const fruits = ["Apple", "Mango", "Banana"];
  const fruitsList = fruits.map((fruit, index) => console.log(index));

  return <div>{fruitsList}</div>;
}
