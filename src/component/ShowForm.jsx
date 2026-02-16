import { useMemo } from "react";
import { FaTrash } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import {
  toggleTodo,
  ItemDelete,
  setEditingTodo,
  closeModal,
} from "../store/Slice.jsx";
import { useDispatch } from "react-redux";

const ShowForm = ({ filterTodos }) => {
  const dispatch = useDispatch();

  const tods = useMemo(() => {
    return filterTodos.map((todo) => {
      return (
        <div
          key={todo.id}
          className={`w-[90%] m-auto rounded-xl border border-gray-200 p-5 
          transition-all duration-300 hover:shadow-md hover:-translate-y-1
          ${todo.completed ? "bg-green-50 opacity-80" : "bg-white"}`}
        >
          {/* Top Row */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              
              <label className="relative flex items-center cursor-pointer">
  <input
    type="checkbox"
    checked={todo.completed}
    onChange={() => dispatch(toggleTodo(todo.id))}
    className="peer hidden"
  />

  <div
    className="w-5 h-5 border-2 border-gray-400 rounded-md
    peer-checked:bg-green-500
    peer-checked:border-green-500
    transition-all duration-200
    flex items-center justify-center"
  >
    <svg
      className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>
</label>


              {/* Title */}
              <h2
                className={`text-[18px] font-semibold transition-all duration-200 ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-900"
                }`}
              >
                {todo.title}
              </h2>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-5">
              <button
              
                onClick={() => dispatch(ItemDelete(todo.id))}
                aria-label="delete"
                className="group cursor-pointer text-red-500 hover:text-red-600 transition"
              >
                <FaTrash
                  size={14}
                  className="group-hover:scale-110 transition"
                />
              </button>

              <button
                aria-label="update"
                onClick={() => {
                  dispatch(setEditingTodo(todo));
                  dispatch(closeModal(true));
                }}
                className="group cursor-pointer text-gray-600 hover:text-primary transition"
              >
                <FiEdit2
                  size={14}
                  className="group-hover:scale-110 transition"
                />
              </button>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between items-center mt-4 text-sm">
            <p className="text-gray-500 max-w-[70%] truncate">
              {todo.description}
            </p>

            <span className="text-gray-400 font-medium">
              {todo.date}
            </span>
          </div>
        </div>
      );
    });
  }, [filterTodos, dispatch]);

  return (
    <div className="flex flex-col items-start gap-6 py-6 border-t border-gray-200">
      {tods}
    </div>
  );
};

export default ShowForm;
