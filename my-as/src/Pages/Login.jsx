import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

function Login() {
  const [number, setNumber] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

 useEffect(()=>{
  sessionStorage.clear()
 },[])
   
    
    
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await fetch(`http://localhost:3000/user`);
        const data = await response.json();
         console.log(data)
        if (response.ok) {
          const user = data.find(item => item.number === number);
    
          if (user&& user.pass === pass ) {
            toast.success('Login successful');
            sessionStorage.setItem('pass',pass)
            navigate('/h'); 
          } else {
            toast.error('Invalid credentials');
          }
        } else {
          toast.error('Login failed: ' + data.message);
        }
      } catch (error) {
        toast.error('Something went wrong: ' + error.message);
      }
    };
    
 
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <label>Mobile Number</label>
        <input
          type='number'
          placeholder='mobile number'
          value={number}
          required
          onChange={(e) => setNumber(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='password'
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <button type='submit'>Login</button>
        <Link to='/'><button style={{backgroundColor:"green",color:"whitesmoke",margin:'0px 8px'}}>New User</button></Link>
      </form>
    </div>
  );
}

export default Login;
