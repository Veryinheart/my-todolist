import React, { createContext, useReducer } from "react";
import todoReducer from "../reducer/todoReducer";
import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_MUTL_TODO,
} from "../actions/todoActions";
export const ToDoListContext = createContext();

const initialDefaultState = {
  todoList: [
    {
      key: "1",
      description: "test",
      category: "html",
      content: "html css",
    },
  ],
};

export const ToDoListContextProvider = (props) => {
  const [state, dispatch] = useReducer(todoReducer, initialDefaultState);
  const addToDo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  const deleteToDo = (todoID) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoID,
    });
  };

  const deleteMutlToDO = (todoIDArr) => {
    dispatch({
      type: DELETE_MUTL_TODO,
      payload: todoIDArr,
    });
  };



  return (
    <ToDoListContext.Provider
      value={{ todoList: state.todoList, addToDo, deleteToDo, deleteMutlToDO }}
    >
      {props.children}
    </ToDoListContext.Provider>
  );
};
