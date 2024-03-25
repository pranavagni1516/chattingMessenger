import React from 'react'
import { useState } from 'react';
const Register = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function register(e){
      e.preventDefault();
      await axios.post('/register',{username,password});
  };

  return (
    <div className='bg-blue-50 h-screen flex items-center'>
        <form className='w-64 mx-auto' onSubmit={register}>
            <input value={username} onChange={(e)=>{setUserName(e.target.value)}} type='text' placeholder="username" className='block w-full mb-2 p-2 rounded-sm border' />
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder="password" className='block w-full mb-2 p-2 rounded-sm border' />
            <button className='bg-blue-500 text-white w-full p-2 rounded-sm'>Register</button>
        </form>
    </div>
  )
}

export default Register