import {
  ADD_TODO,
  REMOVE_TODO,
} from '../actions/actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];
    case REMOVE_TODO:
      return state.filter(element => element.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
