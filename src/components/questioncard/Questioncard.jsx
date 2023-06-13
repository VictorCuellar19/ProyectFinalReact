import React from 'react'
import "./Questioncard.css"


const QuestionCard = ({ questions }) => {
  
  const question = questions.map ((answer) => {
    console.log(answer);
    const incorrectAnswer = answer.incorrect_answers.map ((incorrect, i) => {
      return (
          <button className='button'>
            <li key={i}>{incorrect}</li>
          </button>
      )
    })
    return (
      <div className='container'>
        <h2>{answer.question}</h2>
        
        {incorrectAnswer}
        <button className='button'>{answer.correct_answer}</button>
     
      </div>
    )
   
  }) 

  return (
    <div className="question-card">
      {question}
    </div>
  );
};

export default QuestionCard;
