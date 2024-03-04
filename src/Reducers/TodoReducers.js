export const TodoReducer = (state = { todos: [] }, action) => {
    switch (action.type) {
      case "ADD_TODO_SUCCESS":
        return { todos: [action.payload, ...state.todos] };

        case "EDIT_TODO_SUCCESS":
            return {
              todos: state.todos.map((todo) =>
                todo.id === action.payload.id
                  ? { ...todo, text: action.payload.text }
                  : todo
              ),
            };

      case "REMOVE_TODO_SUCCESS":
        return { todos: action.payload };

      default:
        return state;
    }
  };
  