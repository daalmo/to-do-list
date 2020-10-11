import React, {useState} from 'react';

// function App() {

//   const [inputs, setInputs] = useState("");

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <ToDoCard />
//       <input onChange={() => setInputs((e) => (e.target.value))}/>
//       <input/>
//       <input/>
//       <button>Add Item</button>

//     </div>
//   );
// }

// // create to-do item component

// const ToDoCard = ({title, description, dueDate }) => {
//   return (
//     <div style={{border: "1px sold black", width: "300px"}}>
//       <h1>{title}</h1>
//       <h2>{description}</h2>
//       <p>{dueDate}</p>
//       <button>Check Off</button>
//       <button>Delete</button>
//     </div>
//   );
// };

// export default App;


export default function App() {
  //Need state for list of tasks 
  const [ list, setList ] = useState([
    {
      title: "go on a run",
      description: "",
      dueDate: "",
      isCompleted: false
    }
  ]);

  //Need state for the current value of each text input
  const [ title, setTitle ] = useState('');

  //Need a function to add a task to the task list- task is an object
  const handleAdd = obj => taskList.push( obj ) ;

  //This is a component that will be reused to represent each individual task.
  //What props does each task need?
  const TodoItem = ({ title, description, dueDate, isCompleted }) => {
    //Need state to represent whether the task is checked off or not
    const [isCompleted, setIsCompleted ] = useState(false);
    // setCheck = false;

    //Need a function to toggle whether the task is checked off or not
    const handleCheckOff = () => {
      isCompleted === true ? setIsCompleted(true) : setIsCompleted(false);
    };

    //Need a function to delete the task from the todo list
    //Note that because we've placed this component inside of our main app,
    //it has direct access to the state of our main app
    const handleDelete = () => {
      taskList.remove( inputs );
    };

    return (
      <div>
        {/* The title, description, and due date should appear here. 
        Remember that what you want to display changes based on whether 
        the task is checked off or not */}
        <h1>{list.title}</h1>
        <h3>{description}</h3>
        <p>{dueDate}</p>
        <button onClick={handleCheckOff}>Check off</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* All of the text fields and their labels should go here */}
      <input
        type="text"
        placeholder="Type to do item here..."
        value={inputs.title}
        onChange={(e) => setInputs(inputs.title)}
      />
      <button onClick={handleAdd}>Add Todo Item</button>

      {/* All of the tasks should render here. How can we transform the 
      list of tasks into a list of components? */}
      
    </div>
  );
}