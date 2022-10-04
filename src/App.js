import './App.css';
import { Counter } from './Components/Counter/Counter';
import { Task } from './Components/Todo/Task';

function App() {

  let styles = { color: "teal", fontSize: "32px" }

  return (
    <div className="App">
     <Counter /> 
     <Task /> 
    </div>
  );
}

export default App;
