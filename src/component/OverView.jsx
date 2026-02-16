
const OverView = ({stats}) => {

  return (
    <>
      <div className="lg:w-175 lg:h-37.5 bg-white rounded-[10px] shadow-md p-5 flex flex-col items-center justify-between sm:w-[90%] ">
       <div  className="w-[90%] flex justify-between">
         <h1 className="font-bold text-gray-950 sm:text-[14px] mb-2 md:text-xl">Progress Overview</h1>
         <p className="font-bold text-green-500">{stats.completionPercentage}%</p>
       </div>
       {/*  */}
      <div className="w-[90%]">
        <div className='w-full h-3 bg-blue-100 rounded-2xl'>
            <div style={{ width: `${stats.completionPercentage}%`}} className={` h-full bg-green-500 rounded-2xl`}></div>
        </div>
          <div className="w-[90%]  m-auto mt-2">
            <ul className="flex justify-around items-center text-gray-500">
                <li className="flex flex-col items-center justify-center sm:text-[14px] md:text-[16px]"><p className="text-gray-950 font-bold">{stats.total}</p>Total</li>
                <li className="flex flex-col items-center justify-center sm:text-[14px] md:text-[16px]"><p className="text-gray-950 font-bold">{stats.active}</p>Active</li>
                <li className="flex flex-col items-center justify-center sm:text-[14px] md:text-[16px]"><p  className="text-gray-950 font-bold">{stats.completed}</p>Completed</li>
            </ul>
          
        </div>
        
      </div>
      </div>
    </>
  )
}

export default OverView
