export const AddTodoAction = (todo) => (dispatch) => {
    dispatch({
      type: "ADD_TODO_SUCCESS",
      payload: todo,
    });
  };

  export const EditTodoAction = (id, updatedText) => (dispatch, getState) => {
    const {
      Todo: { todos },
    } = getState();
  
    // eslint-disable-next-line no-unused-vars
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: updatedText } : todo
    );
  
    dispatch({
      type: "EDIT_TODO_SUCCESS",
      payload: {
        id,
        text: updatedText,
      },
    });
  };
  
  
  export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
      Todo: { todos },
    } = getState();
  
    dispatch({
      type: "REMOVE_TODO_SUCCESS",
      payload: todos.filter((t) => todo !== t),
    });
  };