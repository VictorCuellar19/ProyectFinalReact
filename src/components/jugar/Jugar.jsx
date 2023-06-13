import React from 'react'
import QuestionCard from '../questioncard/Questioncard';

const Jugar = ({questions}) => {
    return (
    <div>
      <QuestionCard questions={questions}/>
    </div>
  )
}

export default Jugar
