import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const todoList = [
    {
      Description: "Get out of bed",
      Deadline: "Wed Sep 13 2017",
    },
    {
      Description: "Brush teeth",
      Deadline: "Thu Sep 14 2017",
    },
    {
      Description: "Eat breakfast",
      Deadline: "Fri Sep 15 2017",
    },
  ];
  return (
    <>
      <TodoList listItems={todoList} />
    </>
  );
}
export default App;
