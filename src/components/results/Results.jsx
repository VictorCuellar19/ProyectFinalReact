import React from 'react';
import "./Results.css"

const Results = ({ correctAnswers }) => {

  return (
    <div className="divResult">
      <h2>Resultados</h2>
      <p>Respuestas correctas: "Un elefante, se balanceaba, sobre la tela de una araaaaañaaaa, como veía que no se caía, fueron a llamar a otro elefaaaaaaanteee! Dos elefantes, se balanceaban..."{correctAnswers}</p>
    </div>
  );
};

export default Results;
