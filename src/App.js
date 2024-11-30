import React from "react";
import Services from "./components/Service";
import Contacts from "./components/contacts/Contacts";
import About from "./components/index";
import Calculatrice from './components/Calculatrice';


//composant de type fonction 
function App() {
  return (
    <div className="App">
      <p>projet react </p>
      {/* <Home/> */}
      <Contacts/>
      <Services/>
      <About name ={'kenza'} age={'21'}/>
      {/* Section Calculatrice */}
      <Calculatrice note1={15} note2={18} studentName="Kenza" />
    </div>
  );
}

export default App;


