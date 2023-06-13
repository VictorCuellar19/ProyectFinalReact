import { Routes, Route, useNavigate } from 'react-router-dom';
import '../styles/App.css';
import { useState } from 'react';

import Login from "./login/Login";
import NavBar from "./NavBar/NavBar";
import Home from "./home/Home";
import Results from "./results/Results";
import About from "./about/About";
import AuthRoute from './AuthRoute/AuthRoute';
import Jugar from "./jugar/Jugar";

const userList = [
  {
    Username: 'Santiago',
    password: '123456',
  },
  {
    username: 'Natalia',
    password: '123456',
  },
  {
    username: 'Victor',
    password: '123456',
  },
];

const App = () => {

  const [user, setUser] = useState(null);
  const [loginError, setloginError] =useState("");

  const loginUser = (formData,) => {
      const existUser = userList.find((user)=>{
        return (user.email === formData.email && user.password === user.password)
      })
      if (existUser){
        setUser(existUser);
        setloginError("");
      } else {
        setUser(false);
        setloginError("Usuario o contraseña incorrecta");
      }
  }


  const [questions, setQuestions] = useState([]);
  
  const handleQuestions = (questions) => {
    setQuestions(questions)
  }
  return (
    <>
    <NavBar />
     

      <Routes>
      <Route path="/Home" element={<Home handleQuestions={handleQuestions}/>}/>
      <Route path="/Results" element={<Results/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Jugar" element={<Jugar questions={questions}/>} />
      <Route path="/" element={<Login loginuser={loginUser} loginError={loginError}/>} />
      </Routes>
    </>
  );
};

export default App;
