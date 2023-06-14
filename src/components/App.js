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
    user:'Santiago',
    password:'123456',
  },
  {
    user:'Natalia',
    password:'123456',
  },
  {
    user:'Victor',
    password:'123456',
  },
];

const App = () => {

  const [user, setUser] = useState(null);
  const [loginError, setloginError] =useState("");

  const navigate = useNavigate();

  const loginUser = (formData) => {
      const existUser = userList.find((user)=>{
        return (user.user === formData.user && user.password === formData.password);
      })
      if (existUser){
        setUser(existUser);
        setloginError("");
        navigate("/Home");
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
      <Route path="/Home" element={<AuthRoute user={user} component={<Home handleQuestions={handleQuestions}/>} />}/>
      <Route path="/Results" element={<AuthRoute user={user} component={<Results/>}/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Jugar" element={<Jugar questions={questions}/>} />
      <Route path="/Login" element={<Login loginUser={loginUser} loginError={loginError}/>} />
      
      
      </Routes>
      <div className='divHome'>
      <h1>Bienvenidos a la Segunda división</h1>
      <img src="data:image/jpeg;base64,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"></img>
      </div>
    </>

    
  );
};

export default App;
