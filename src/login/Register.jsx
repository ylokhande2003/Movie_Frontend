import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'
const Register= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://movie-backend-if4n.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // User registered successfully, you can redirect to login page or show a success message
        console.log('User registered successfully');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Server error');
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className='form'>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button className='btn' type="submit">Register</button>
      {error && <div style={{ color: 'ed' }}>{error}</div>}
    </form>
    <h3 className='login-here'>Already have account ? <Link to="/login" className="btn" >Login here !</Link></h3>
</>
  );
};

export default Register;