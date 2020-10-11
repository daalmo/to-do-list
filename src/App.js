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
  const [ list, setList ] = useState([]);
  //Need state for the current value of each text input
  const [ title, setTitle ] = useState('');
  const [ description, setDescription] = useState('');
  const [ dueDate, setDueDate] = useState('');
  //Need a function to add a task to the task list- task is an object
  const handleAdd = () => {
    if ( title === '') alert( 'Please add title');
    else if ( description === '') alert( 'Please add description');
    else if ( dueDate === '') alert( 'Please add due date');
    else {
      setList([ ...list , { 
        title: title, 
        description: description, 
        dueDate: dueDate 
      }, 
    ]);  
    setTitle('');
    setDescription('');
    setDueDate('');
    }
  };

  //This is a component that will be reused to represent each individual task.
  //What props does each task need?

  const TodoItem = ({ task }) => {
    //Need state to represent whether the task is checked off or not
    const [ checkedOff, setCheckedOff ] = useState(false);

    //Need a function to toggle whether the task is checked off or not
    const handleCheckOff = () => {
      setCheckedOff(!checkedOff);
    };

    //Need a function to delete the task from the todo list
    //Note that because we've placed this component inside of our main app,
    //it has direct access to the state of our main app
    const deleteTask = () => {
      setList( list.filter( item => item !== task));
    }

    return (
      <div>
        {/* The title, description, and due date should appear here. 
        Remember that what you want to display changes based on whether 
        the task is checked off or not */}
        {checkedOff ?
        <h1>
          <strike>{task.title}</strike>
        </h1> :
        <>
          <h1>{task.title}</h1>
          <h3>{task.description}</h3>
          <p>Due: {task.dueDate}</p>
        </>
         }
        <button onClick={handleCheckOff}>Check off</button>
        <button onClick={deleteTask}>Delete</button>
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type description here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type due date here..."
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={handleAdd}>Add To-do Item</button>

      {/* All of the tasks should render here. How can we transform the 
      list of tasks into a list of components? */}
      {list.map( (task) => (
        <TodoItem task={task} />
      ))}
    </div>
  );
}