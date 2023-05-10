import React, { useState } from 'react';
import img from './wings.png';
import { Link } from 'react-router-dom';


function MyForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState('');

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Checkbox is checked:', isChecked);
  }

  return (
    <div className='loginpage'>
    <img src= {img} alt='wings'/>
      <form id='form' onSubmit={handleSubmit}>
      <div className='log'>Log In</div>
      <label style={{ display: 'block', fontFamily: "'Indie Flower', cursive" }}>
       <span style={{ display: 'block', marginBottom: '0.5rem'}}></span>
       <input type="text" placeholder="Username or phone no" value={username} onChange={handleUsernameChange} style={{ width: '100%' }}/>
       </label>
      <br />
      <label style={{ fontSize: '18px', fontFamily: 'Indie Flower, cursive' }}><input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>By Signing in to Wings Technology, You agree with the <Link to = './privacy' style={{textDecoration: 'none'}}> privacy Policy </Link>  and <Link to ='./terms' style={{textDecoration: 'none'}}>Terms of Use</Link></label>        
      <br />
      <button type="submit">Proceed</button>
      <p>OR</p>
      <button className='button' type="submit" >
         <span className="ab q">
       <svg width={40} height={30} className='sb l'> 
       <g fill="none" fill-rule="evenodd">
       
       <path d="M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z" fill="#4285f4"/>
       <path d="M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z" fill="#34A853"/>
       <path d="M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z" fill="#FBBC05"/>
       <path d="M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z" fill ="#ea4335"></path></g>
       </svg>
         </span>
         <span className="">sign in with Google</span>
       </button>
       <br></br>
       <button className='button' type="submit">
      <span className="ab q">
        <svg width={40} height={30} className='sb l'>
          <path fill="#F25022" d="M15.2,14.1h4.5v4.5h-4.5V14.1z"/>
          <path fill="#7FBA00" d="M6.7,14.1h4.5v4.5H6.7V14.1z"/>
          <path fill="#00A4EF" d="M15.2,5.6h4.5v4.5h-4.5V5.6z"/>
          <path fill="#FFB900" d="M6.7,5.6h4.5v4.5H6.7V5.6z"/>
        </svg>
      </span>
      <span className="">sign in with Microsoft</span>
    </button>
    </form>
    </div>
  );
}

export default MyForm;
