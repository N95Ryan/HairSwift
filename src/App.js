<<<<<<< HEAD
import React from 'react';
import background from './images/background.jpg'; // Importez l'image de fond
=======
import logo from './logo.svg';
>>>>>>> 0ea831b929369e833b6a2bf7e73ffd63fcf00c4d
import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div className="App" style={{backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", height: "100vh", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <div className="overlay">
        <h1 style={{fontWeight: "bold", fontSize: "48px", color: "white"}}>Choisissez votre coiffeur</h1>
        <h2 style={{fontSize: "24px", color: "white"}}>Rapide - Simple - Disponible 24h/24</h2>
        <input type="text" placeholder="Rechercher un salon de coiffure..." className="search-bar" />
      </div>
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur HairSwift.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 0ea831b929369e833b6a2bf7e73ffd63fcf00c4d
    </div>
  );
}

export default App;
