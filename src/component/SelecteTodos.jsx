import { useState } from "react"
import { FiList, FiClock, FiCheckCircle } from "react-icons/fi"
import {fillterTodo} from '../store/Slice';
import { useDispatch } from "react-redux";
const SelecteTodos = ({stats}) => {
  const [activeId, setActiveId] = useState(1)
  const dispatch =useDispatch();
  const state = [
    { id: 1, text: "All", count: stats.total, icon: <FiList size={16} /> },
    { id: 2, text: "Active", count: stats.active, icon: <FiClock size={16} /> },
    { id: 3, text: "Completed", count: stats.completed, icon: <FiCheckCircle size={16} /> },
  ]

  return (
    <ul className="flex justify-around items-center text-gray-500 sm:text-[14px]">
      {state.map((item) => {
        const isActive = activeId === item.id

        return (
          <li
            key={item.id}
            onClick={() =>{dispatch(fillterTodo(item.text)) ,setActiveId(item.id)}}
            className={`flex items-center gap-2 cursor-pointer transition
              ${isActive ? "text-gray-950 font-semibold" : "hover:text-gray-950"}
            `}
          >
            {item.icon}
            <span>{item.text}</span>
            <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-sm">
              {item.count}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default SelecteTodos
