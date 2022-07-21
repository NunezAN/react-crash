import TodoItem from "./components/TodoItem.jsx";
import Product from "./components/Product.jsx";
import products from "./components/vshoolProducts.js";
import "./App.css"
function App() {
  const producstComponents = products.map((item)=>{
      return <Product key={item.id}  product={item}></Product>
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
