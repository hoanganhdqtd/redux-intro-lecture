export const ADD_TODO = "TODO.ADD";
export const TOGGLE_TODO = "TODO.TOGGLE";
export const SET_FILTER = "TODO.SET_FILTER";

const initialState = {
  todos: [],
  filter: "SHOW_ALL",
};

const todoReducer = (state = initialState, action) => {
  // console.log("dispatch action", JSON.stringify(action, null, 2));
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: payload.id, text: payload.text, completed: false },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== payload.id) {
            return todo;
          }
          return { ...todo, completed: !todo.completed };
        }),
      };
    case SET_FILTER:
      return { ...state, filter: payload };
    // const newState = { ...state, filter: payload };
    // console.log("state", JSON.stringify(newState, null, 2));
    // return newState;
    default:
      return state;
  }
};

export default todoReducer;
