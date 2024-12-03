
import { useState } from 'react';
import './App.css'

function App() {

  const [task, setTask] = useState(''); // For input field
  const [tasks, setTasks] = useState([]); // For storing tasks

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask(''); // Clear input field
    }
    console.log(tasks)
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((j, i) => i !== index));
  };

  return (
    <>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">To-Do-Do</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Settings</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Sign Out</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
<div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Product Description</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ width: '80%', padding: '10px', marginRight: '10px' }}
      />
    
      <button onClick={addTask} style={{ padding: '10px' }}>
        Add
      </button>
      
      <ul className='my-'>
        {tasks.map((t, index) => (
          <li key={index}>{index+1}: {t} <button onClick={()=>{deleteTask(index)}} className='rounded-lg ml-10 my-3 py-1 px-2 bg-red-500 text-white'>
          Delete
        </button>
   </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
