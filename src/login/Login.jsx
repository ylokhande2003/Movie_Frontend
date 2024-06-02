// import student from './login_register/login-student.jpg'
import { useState , useContext } from "react";
import axios from 'axios';
import { toast } from "react-hot-toast";
import {useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext/UserContext';
// import Nav from '../nav/Nav'


import './login.css'
// import Footer from '../footer/Footer';
const Login = () => {
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const LoginsUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      //  console.log("hey");
      const { data } = await axios.post('https://movie-backend-if4n.onrender.com/api/auth/login', {
        email,
        password
      });
      console.log(data);
      if (data.error) {
        toast.error(data.error)
      } else {
        // localStorage.setItem('user', JSON.stringify(data));
        setUser({_id:data._id, name:data.name,email:data.email })
        localStorage.setItem('token', data.token);
        // console.log("jii");
        navigate('/movielist')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (

    <>
  
      <section className="register-div login-div" id="regiter-form">
        <div className="">
          <h3>Login</h3>
          <form className="form" onSubmit={LoginsUser}>
            <div className="img-login-div">
              {/* <img src={student} alt="" className='login-img' /> */}
            </div>
            <div>
              <label htmlFor="email">email:</label>
              <input type="text" id="email" placeholder="enter username" name="eamil"
                value={data.email
                } onChange={(e) => setData({ ...data, email: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="password">Enter Password </label>
              <input type="password" placeholder="Enter the password" id="password" name="password"
                value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
                required />
            </div>
            <input type="submit" className="submit btn" value="Submit" />
          </form>
          <h3 className='register-here'>Not a member of Shikshasankalp ? <Link to="/register" className="register-here-btn" >Regester here !</Link></h3>
        </div>
      </section>
    </>
  )
}

export default Login