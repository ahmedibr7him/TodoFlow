import { useCallback,useRef,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,closeModal ,updateItem,setEditingTodo} from "../store/Slice.jsx";
import { updateData } from "../store/Selectors.jsx";
const FormAdd = ({close}) => {
  const update =useSelector(updateData);
    // dispatch
    const dispatch =useDispatch();
    // refs
    const Title =useRef(null);
    const Description =useRef(null);
    // Data
    const formDate =(dataString)=>{
        const date =new Date(dataString);
        const options ={year:"numeric",month:"long",day:"numeric"};
        return date.toLocaleDateString(undefined,options);
    }
    // submit from
const handleSubmit = useCallback((e) => {
  e.preventDefault();

  const title = Title.current.value.trim();
  const description = Description.current.value.trim();

  if (!title) {
    return alert("Title is required");
  }

  if (update) {
    dispatch(updateItem({ id: update.id, title, description }));
    dispatch(setEditingTodo(null));
  } else {
    dispatch(addTodo({
      id: Date.now(),
      date: formDate(new Date()),
      title,
      description,
      completed: false
    }));
  }

  dispatch(closeModal(false));

  Title.current.value = "";
  Description.current.value = "";

}, [dispatch, update]);


    //  close model
    const handel =useCallback(()=>{
        dispatch(closeModal(false));
         dispatch(setEditingTodo(null));
    },[dispatch,close]);
    // update
    useEffect(()=>{
      if(update){
        Title.current.value =update.title;
        Description.current.value =update.description;
      }
    },[update,dispatch])
  return (
    <>
    {close && (
        <>
        <div className="fixed w-full top-0 h-full bg-white/85" onClick={handel}></div>
      <div className="fixed md:w-100 h-100 sm:w-[90%] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-[10px] p-4 flex flex-col gap-4 items-center ">
      <button aria-label="close" onClick={handel} className="bg-red-900 w-7.5 h-7.5  rounded-[15px] absolute right-2 top-2 text-center text-white text-[20px] font-semibold cursor-pointer">x</button>
        <h1 className="text-[25px] font-bold text-gray-950">Create Todos</h1>
        <form onSubmit={(e)=>{handleSubmit(e)}} className="flex flex-col gap-8  w-[80%]">
            <div className="flex flex-col gap-3">
            <label htmlFor="title" className="text-[20px] font-semibold">Title</label>
          <input ref={Title} type="text" className="border shadow-md p-1 outline-none text-gray-950 rounded-[5px] bg-white w-full" id='title' placeholder="Todo Title" required/>
           </div>
           <div className="flex flex-col gap-3">
            <label htmlFor="Description" className="text-[20px] font-semibold">Description</label>
          <input ref={Description} type="text" className="border shadow-md p-1 outline-none text-gray-950 rounded-[5px] bg-white w-full" id='Description' placeholder="Todo Description" />
           </div>
          <button type="submit" className="rounded-[5px] hover:bg-gray-500 focus:bg-white focus:text-gray-950 cursor-pointer  w-50 h-10 bg-gray-950 text-white font-bold m-auto" aria-label="add Todo">Add Todo</button>
        </form>
      </div>
        </>
    )}
    </>
  )
}

export default FormAdd
