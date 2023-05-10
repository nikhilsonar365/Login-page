import React, { useState } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

function FormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // send form data to server
    fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      // TODO: handle successful form submission
    })
    .catch(error => {
      console.error(error);
      // TODO: handle form submission error
    });
  }

  return (
   
   <div className='App-header'>
    <form onSubmit={handleSubmit}>
      <label>
        Name:<br></br>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label><br></br>
      <label>
        Email:<br></br>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label><br></br>
      <label>
        Message:<br></br>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label><br/> 
      <button type="submit">Submit</button><br/>
      Don't have an account? <Link to= "/loginform">Create New Account</Link>
      </form></div>      
  );
}

export default FormPage;
