import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}],
    setRef: false,
    setRef2: false,
    setRef3: false,
    setBoxRef: false
}

export const todoSlice = createSlice({ 
    name: 'todo',  
    initialState, 
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        setShowCards: (state,action) => { 
             state.setRef = action.payload.setRef; 
             state.setRef2 = action.payload.setRef2;
             state.setRef3 = action.payload.setRef3;  
             state.setBoxRef = action.payload.setBoxRef;
        },

        clickWorkHandler: (state)=>{ 
            state.setBoxRef.current.style.display = "block";
        },
    }
}) 

export const {addTodo, removeTodo, setShowCards,clickWorkHandler} = todoSlice.actions

export default todoSlice.reducer 