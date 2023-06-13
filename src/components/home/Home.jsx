import "./Home.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Jugar from './jugar/Jugar';
import Filter

const Home = () => {
  const [questions, setQuestions] = useState([]);
  

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=50');
        setQuestions(response.data.results);
      } catch (error) {
        console.error('Error fetching trivia questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <>
    
     {/*<Jugar questions={questions}/>*/}    </>
  );
};

export default Home;