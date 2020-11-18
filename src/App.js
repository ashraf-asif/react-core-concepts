import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const products = [
    { key: "1", name: "Photoshop", price: "$29.99" },
    { key: "2", name: "Lightroom", price: "$19.99" },
    { key: "3", name: "Illustrator", price: "$24.99" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        {products.map((product) => (
          <Product product={product} key={product.key}></Product>
        ))}
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div>
      <h1>{users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

function Product(props) {
  const { name, price } = props.product;
  return (
    <div className="products">
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy now!</button>
    </div>
  );
}

export default App;
