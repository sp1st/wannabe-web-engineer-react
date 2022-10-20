import { useState } from "react";

const Todo = (props) => {
  const [priority, setTodoPriority] = useState(0);
  return (
    <div
      style={{
        color: priority >= 1 ? "red" : "black",
      }}
    >
      <div>
        <label htmlFor="todo">
          <input type="checkbox" id="todo" />
          {props.name}
          <input
            type="number"
            id="priority"
            onChange={(e) => setTodoPriority(e.target.value)}
            value={priority}
          />
        </label>
      </div>
    </div>
  );
};

export default Todo;
