import './App.css';
import React, {Component} from 'react';
import Case from './Components/TrafficLightCase'
/*
  crear un semaforo en react (separado por componentes)
  guardar en un input usuario y correo 
  y mostrar en una tabla.
*/


function App() {
  return (
    <div className="App">
      <Case />
    </div>
  );
}

export default App;
