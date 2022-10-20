// import Counter from "./components/Counter";
// import Item from "./components/Item";
import "./App.css";
import TodoList from "./components/TodoList";
// import ItemList from "./components/ItemList";

function App() {
  // return (
  //   <div className="App">
  //     <Counter />
  //   </div>
  // );

  return (
    <div className="App">
      {/* <Item name="りんご" price={300} /> */}
      <TodoList />
      {/* <ItemList /> */}
    </div>
  );
}

export default App;
