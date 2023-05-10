import React, { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  
    console.log(formData);
  };

  return (
    <div className='App-header'>
    <form onSubmit={handleSubmit}>
      <h2>Create New Account</h2>
      <label>
        Email:<br></br>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Password:<br></br>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <label>
        Confirm Password:<br></br>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
      </label>
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
}

export default SignupForm;
