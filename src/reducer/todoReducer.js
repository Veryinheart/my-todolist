import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_MUTL_TODO,
} from "../actions/todoActions";

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.key !== action.payload),
      };
    case DELETE_MUTL_TODO:
      let arr = state.todoList;
      for (let k of action.payload) {
        arr = arr.filter((item) => item.key !== k);
      }
      return {
        ...state,
        todoList: arr,
      };
    default:
      return state;
  }
};

export default todoReducer;
