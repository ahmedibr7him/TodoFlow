// basic selector
import { createSelector } from "@reduxjs/toolkit";
export const selectTodos=(state)=>state.todos.items;
export const selectFilter=(state)=>state.todos.filter;
export const isClose=(state)=>state.todos.isclosedModal;
export const updateData=(state)=>state.todos.editingTodo;

// fillter item

export const selectorFilteredTodos = createSelector([selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case "Active":
        return todos.filter(todo => !todo.completed);

      case "Completed":
        return todos.filter(todo => todo.completed);

      default:
        return todos;
    }
  }
);



export const selectTodosState = createSelector(
  [selectTodos],
  (todos) => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const active = total - completed;
    const completionPercentage =
      total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
      total,
      completed,
      active,
      completionPercentage
    };
  }
);
