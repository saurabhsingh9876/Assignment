
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Ragister.css'

function Register() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = { name, number, pass };

    try {
      const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        toast.success('Registered Successfully');
        navigate('/login');
      } else {
        const errorData = await response.json();
        toast.error('Registration failed: ' + errorData.message);
      }
    } catch (error) {
      toast.error('Something went wrong: ' + error.message);
    }
  };

  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type='text'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Register;
