import { FiFilter } from "react-icons/fi"

function Filed() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-1">
         <div className="w-12 h-12 rounded-full border-5 border-gray-400"></div>
        <h2 className="font-bold text-[20px] text-gray-950">No Todos Yet</h2>
        <p className=" text-gray-400">Add your first todo get stated!</p>
        
       <div className="flex flex-col justify-center items-center my-5">
        <h1><FiFilter size={40} className="text-gray-400" /></h1>
        <h2 className="font-bold text-[20px] text-gray-950">No Filter Todos</h2>
       </div>
      </div>
    </>
  )
}

export default Filed
