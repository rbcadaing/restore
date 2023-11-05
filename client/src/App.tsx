import {useEffect, useState} from "react";
import {Product} from "./product";

function App() {
  const [products, setproducts] = useState<Product[]>([]);

  function addProduct() {
    setproducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        brand: "some brand",
        description: "demo product",
        pictureUrl: "http://picsum.photos/200",
        type: "",
        quantityInStock: 100,
      },
    ]);
  }

  useEffect(() => {
    fetch("http://localhost:5121/api/products")
      .then((response) => response.json())
      .then((data) => setproducts(data));
  }, []);

  return (
    <div className="app">
      <h1>Re-store</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}-{product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
