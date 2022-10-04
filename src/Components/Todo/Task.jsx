import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskItem } from "./TaskItem";

export const Task = () => {
  const [query, setQuery] = React.useState("");
  const [task, setTask] = React.useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleAdd = () => {
    const payload = {
      title: query,
      status: false,
      id: uuidv4(),
    };

    setTask([...task, payload]);
  };

  return (
    <>
      <h1>Todo</h1>
      <input type="text" value={query} onChange={(e) => handleChange(e)} />
      <button onClick={() => handleAdd()}> Add </button>
      {task.map((item) => {
        return (
          <>
            <TaskItem {...item} />
          </>
        );
      })}
    </>
  );
};
