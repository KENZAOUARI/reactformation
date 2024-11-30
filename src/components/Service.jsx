import React, { Component } from 'react'
//extend c'est hérite
//render retourne ce qui a dans components 
//return tout ce qui doit s'afficher à l'interieur services 
//erreur dans le code : les elements doivent etre englobes dans un element parent soit on met <> </> ou la balise react.fragment

export default class Service extends Component {
  render() {
    return (

        <>
      <h1>Bienvenue dans le composant de type classe</h1>
      <ul>
        <li>JAVASCRIPT</li>
        <li>Node js</li>
      </ul>
      </>
    )
  }
}
