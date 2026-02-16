import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { closeModal,ClearComplete,Completed } from "../store/Slice.jsx";
import { FaTrash,FaCheckCircle } from "react-icons/fa"
const Add = ({stats,close}) => {
      const dispatch =useDispatch();
    const handel =useCallback(()=>{
        dispatch(closeModal(!close));
        
    },[dispatch,close]);
  return (
    <>
      <div className="w-full flex justify-between items-center px-4">
        <button aria-label="addTable" onClick={handel}  className="cursor-pointer relative inline-flex items-center justify-start sm:text-[14px] md:text-[16px] sm:pl-2 sm:pr-10  sm:py-2 md:pl-3 md:pr-12 overflow-hidden  text-gray-950 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-950 group-hover:h-full"></span>
    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white font-bold">Add Todo</span>
</button>
       {stats.total>0 &&<div className="flex sm:flex-col md:flex-row sm:items-end sm:gap-3 md:justify-between md:items-center  w-[50%]">
        <button aria-label="ClearComplete" onClick={()=>dispatch(ClearComplete())} className="flex items-center gap-2 text-red-500 sm:text-[14px] md:text-[16px] cursor-pointer">   <FaTrash size={12} color="red" /> Clear Completed</button>
        <button aria-label="Completed" onClick={()=>dispatch(Completed())} className="flex items-center gap-2 text-green-500 sm:text-[14px] md:text-[16px] cursor-pointer">   <FaCheckCircle size={12} color="green" />  Completed</button>
       </div>}
      </div>
    </>
  )
}

export default Add
