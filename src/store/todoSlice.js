import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().valueOf(),
                completed: false,
                txt: action.payload.input
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo=> todo.id !== action.payload.id)

        },
        checkedToggle(state, action) {

            const toggledTodo = state.todos.find(todo=> todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;

        }

    }
});

export const {addTodo, removeTodo, checkedToggle} = todoSlice.actions
export default todoSlice.reducer;