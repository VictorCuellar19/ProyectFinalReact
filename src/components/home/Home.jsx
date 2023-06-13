import "./Home.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Home = ({handleQuestions}) => {
  

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
        handleQuestions(response.data.results);
      } catch (error) {
        console.error('Error fetching trivia questions:', error);
      }
    };
    fetchQuestions();
  }, [category, difficulty]);

const changeCategory = (event) => {
  setCategory(event.target.value)
}

const changeDifficulty = (event) => {
  setDifficulty(event.target.value)
}

console.log(category);
console.log(difficulty);

  
  return (
    <div className="divFilters">
      <select onChange={changeCategory}>
        <option value="17">Ciencias y Naturaleza</option>
        <option value="21">Deportes</option>
        <option value="23">Historia</option>
        <option value="22">Geografia</option>
        <option value="25">Arte</option>
      </select>

      <select onChange={changeDifficulty}>
        <option value="easy">Facil</option>
        <option value="medium">Media</option>
        <option value="hard">Dificil</option>
      </select>

    <button><Link to="/Jugar">Jugar</Link></button>
  </div>
  )};
  

export default Home;