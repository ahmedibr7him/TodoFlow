

import { createSlice } from "@reduxjs/toolkit";

const getInitialTodos = () => {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
};

const InitialData={
    items:getInitialTodos(),
    filter:"All",
    isAddingTodo:false,
    isclosedModal:false,
    editingTodo:null
}

export const dataSlice=createSlice({
    name:"todos",
    initialState:InitialData,
    reducers:{
        closeModal:(state,action)=>{
            state.isclosedModal=action.payload;
        },
        addTodo:(state,action)=>{
            state.items.push(action.payload);
            state.isAddingTodo=action.payload;
        },
          toggleTodo:(state,action)=>{
            const todo =state.items.find(todo=>todo.id===action.payload);
            if(todo){
                    todo.completed = !todo.completed;
            }
        },
        fillterTodo:(state,action)=>{
            state.filter=action.payload
        },
        ItemDelete:(state,action)=>{
            state.items=state.items.filter((ele)=>ele.id !==action.payload);
        },
        ClearComplete:(state)=>{
            state.items =state.items.filter((ele)=>!ele.completed);
        },
        Completed:(state)=>{
            state.items.forEach((ele)=>ele.completed=true)
        },
        setEditingTodo: (state, action) => {
       state.editingTodo = action.payload;
        },
     updateItem: (state, action) => {
  const { id, title, description } = action.payload;
  const todo = state.items.find((item) => item.id === id);
    todo.title = title;
    todo.description = description;

},


    }
})

export default dataSlice.reducer;
export const {addTodo,closeModal,toggleTodo,setEditingTodo,updateItem ,fillterTodo,ItemDelete,ClearComplete,Completed}=dataSlice.actions;