import TodoItem from "./components/TodoItem.jsx";
import Product from "./components/Product.jsx";
import products from "./components/vshoolProducts.js";
import "./App.css"
function App() {
  const producstComponents = products.map((product)=>{
      return <Product
      key={product.id}
      name={product.name} 
      price={product.price} 
      description={product.description}
      >
      </Product>
  })
  return (
    <div className="container">
        {/* <div className="TodoList--container">
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
        </div> */}
        <div>
        {producstComponents}

        </div>
    </div>
  );
}

export default App;
