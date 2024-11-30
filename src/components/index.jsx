import React from 'react'
import './about.css'
//props passer des infos d'un element parent à un element enfant 
//1ere methode : props 
//2eme methode :créer des constantes en bas de return
//3eme distructuring:

const Index = ({ name, age }) => {
  return (
    <div className="AboutUs">
      <h2>A propos de nous</h2>
      <p>Bienvenue à {name} qui a l'Age de {age} ans sur notre site web</p>
      <img src="./bouqyet.jpg" alt="Bouquet" />
    </div>
  );
};

export default Index;
