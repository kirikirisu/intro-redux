import {
  ADD_TODO,
  REMOVE_TODO,
} from './actionTypes';

export const addTodo = text => ({
  type: ADD_TODO,
  id: Date.now().toString(),
  text,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});
