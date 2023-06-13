import "./Home.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
        setQuestions(response.data.results);
      } catch (error) {
        console.error('Error fetching trivia questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  

  return 
    <>
    <select>
      <option value="17">Ciencias y Naturaleza</option>
      <option value="21">Deportes</option>
      <option value="23">Historia</option>
      <option value="22">Geografia</option>
      <option value="25">Arte</option>
    </select>

    <select>


    
    <button><Link to="/Jugar">Jugar</Link></button>

    
     </>
  );
};

export default Home;