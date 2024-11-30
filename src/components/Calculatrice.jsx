import React from 'react';


const Calculatrice = (props) => {
  // Accès direct aux propriétés des props
  const note1 = props.note1;
  const note2 = props.note2;
  const studentName = props.studentName;

  // Calcul de la moyenne
  const moyenne = (note1 + note2) / 2;

  return (
    <div className="calculatrice">
      <h2>Calculatrice de Moyenne</h2>
      <p>Bienvenue {studentName}! Voici vos résultats :</p>
      <ul>
        <li>Note 1 : {note1}</li>
        <li>Note 2 : {note2}</li>
        <li>Moyenne : {moyenne}</li>
      </ul>
    </div>
  );
};

export default Calculatrice;

 