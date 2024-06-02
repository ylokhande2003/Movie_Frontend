// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Login from './login/Login'
import Home from './Home';
import Register from './login/Register';
import { UserContextProvider } from './userContext/UserContext';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Movie from './Componants/Movie';
import './App.css'
import MovieList from './Componants/MovieList';

function App() {


  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/movielist' element={<Movie/>}></Route>
          <Route
          path="/lists/:id"
          element={
           <MovieList/>
          }
        />
        </Routes>
      </Router>
     </UserContextProvider>
  )
}

export default App
