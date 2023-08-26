import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const navigate=useNavigate()
  let pass=sessionStorage.getItem('pass')
  useEffect(()=>{
    if(pass==''||pass===null){
      navigate('/login')
    }
  },[])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div>
      <nav className="navbar">
        <ul className='ul'>
          {/* <li>
            <p className="navbar-logo">My App</p>
          </li> */}
          <li>
            <Link to="/home">Home</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </nav>
      {/* <p>Home</p> */}
      <form onSubmit={handleSubmit}className='form'>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <div>
        <h2>Tasks</h2>
        <ul>
          {tasks.map((task, index) => (
            <li className='li' key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default Home