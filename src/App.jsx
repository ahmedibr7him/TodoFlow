import { useSelector } from "react-redux";
import OverView from "./component/OverView.jsx";
import Title from "./component/Title.jsx";
import OverFlow from "./OverFlow.jsx";
import { selectTodos,selectTodosState,selectorFilteredTodos,selectFilter,isClose } from "./store/Selectors.jsx";
import FormAdd from "./component/FormAdd.jsx";
function App() {
    const todos =useSelector(selectTodos);
    const filterTodos =useSelector(selectorFilteredTodos);
    const stats =useSelector(selectTodosState);
    const close =useSelector(isClose);;
  return (
      <>
      <div className="flex flex-col items-center w-full overflow-hidden justify-center gap-6 mt-8">
        <Title/>
        <OverView stats={stats}/>
        <OverFlow stats={stats} close={close} todos={todos} filterTodos={filterTodos}/>
        <FormAdd close={close}/> 
      </div>
     </>
  );
}

export default App;
