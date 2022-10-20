import Todo from "./Todo.jsx";
import { useState } from "react";

const TodoList = () => {
  const [todoName, setTodoName] = useState("");
  // const [priority, setTodoPriority] = useState(0);
  const [items, setItems] = useState([]);
  return (
    //ここにItemコンポーネントを並べる
    <div>
      <h2>TODOリスト</h2>
      <ul>
        {items.map((item) => {
          return (
            <div key={item.name}>
              <Todo name={item.name} /*priority={item.priority}*/ />
            </div>
          );
        })}
      </ul>
      <div>
        <label htmlFor="itemName">
          <div>New Task</div>
          <input
            type="text"
            id="itemName"
            onChange={(e) => setTodoName(e.target.value)}
            value={todoName}
          />
        </label>
        {/* <label htmlFor="priority">
          優先度：
          <input
            type="number"
            id="priority"
            onChange={(e) => setTodoPriority(e.target.value)}
            value={priority}
          />
        </label> */}
        <button
          onClick={() => {
            setItems((items) => [
              ...items,
              { name: todoName /*priority: priority*/ },
            ]);
          }}
        >
          追加
        </button>
      </div>
    </div>
  );
};

export default TodoList;
