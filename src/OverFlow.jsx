import Add from './component/Add'
import Filed from './component/Filed'
import SelecteTodos from './component/SelecteTodos'
import ShowForm from './component/ShowForm'
const OverFlow = ({stats,todos,filterTodos}) => {
  return (
    <>
    <div className='lg:w-175 sm:w-[90%] rounded-[5px] shadow-md py-4 flex flex-col gap-8 mb-8 '>
         <Add stats={stats}/> 
         <SelecteTodos stats={stats}/>
         {stats.total ===0 ? <Filed/> :""}
         <ShowForm todos={todos} filterTodos={filterTodos}/>
    </div>
    </>
  )
}

export default OverFlow