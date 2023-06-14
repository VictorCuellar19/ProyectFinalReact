import React, { useState } from 'react';

const Results = ({ correctAnswers }) => {

  return (
    <div>
      <h2>Resultados</h2>
      <p>Respuestas correctas: {correctAnswers}</p>
    </div>
  );
};

export default Results;
