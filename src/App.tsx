import { Banner, Task, Trash } from "./components";
import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { getInitTodo } from "./app/todos/tasksSlice";

function App() {
  const dispatch = useAppDispatch()
  useEffect(()=> {
    dispatch(getInitTodo());
  },[])
  return (
    <>
      <Banner title={"Todo List"} />
      <Task />
      <Trash/>
    </>
  );
}

export default App;
