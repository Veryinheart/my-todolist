import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ToDoListContext } from "../context/TodoListContext";
import { Button } from "antd";

const ToDoDetail = () => {
  const { todoList } = useContext(ToDoListContext);
  const params = useParams();
  const todoItem = todoList.find((item) => (item.key === params.todoID));

  return (
    <>
      <h1>Description: {todoItem.description}</h1>
      <h3>Category:{todoItem.category}</h3>
      <h3>Content:{todoItem.content}</h3>
      <Link to="/todo" ><Button >Back</Button></Link>
    </>
  );
};

export default ToDoDetail;