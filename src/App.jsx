import TodoItem from "./components/TodoItem.jsx";
import Joke from "./components/joke.jsx"
import "./App.css"
function App() {
  return (
    <div className="container">
        {/* <div className="TodoList--container">
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
        </div> */}
        <Joke jokeqa = {{question: "What did the elephant say to the naked man?", answer: "How do you breathe through that [tiny thing]?"}}></Joke>
        <Joke jokeqa = {{question: "A man goes to the zoo and the only animal there is one dog.", answer: "It is a shitzhu."}}></Joke>
        <Joke jokeqa = {{answer: "I went to buy some camo pants but couldn’t find any."}}></Joke>
        <Joke jokeqa = {{answer: "I failed math so many times at school, I can’t even count."}}></Joke>
        <Joke jokeqa = {{question: "Three guys walk into a bar.", answer: "You'd think one of them would've seen it."}}></Joke>
    </div>
  );
}

export default App;
