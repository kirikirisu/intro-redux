import {
  ADD_TODO,
  REMOVE_TODO
} from "../actions/actionTypes";

const initialState = [];

const todos = (state = initialState, actoin) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: actoin.id,
          text: action.text,
        },
      ];
    case REMOVE_TODO:
      return state.map(
        todo => todo.id
      );
    default:
      return state;
  }
};

export const todos;