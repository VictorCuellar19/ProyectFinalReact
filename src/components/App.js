import { Routes, Route, useNavigate } from 'react-router-dom';
import '../styles/App.css';

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
    Username: 'Natalia',
    password: '123456',
  },
  {
    Username: 'Victor',
    password: '123456',
  },
];

const App = () => {
  

  return (
    <>
    <NavBar />
     

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Results" element={<Results/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Jugar" element={<Jugar/>} />
      <Route path="/Login" element={<Login/>} />
      </Routes>
    </>
  );
};

export default App;
