import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';
import { delete_all } from './redux/todoapp/actions/Index';



function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.OperationsReducer)

  return (
    <div className="App">
      <h2>Redux To-Do-List</h2>
      <Form/>
     <Todos/>
      {todos.length > 1 && (
        <button className='clear-all' onClick={()=>dispatch(delete_all())}>clear all</button>
      )}
      
    </div>
  );
}

export default App;
