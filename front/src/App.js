import React from 'react';
import background from './images/background.jpg'; // Importez l'image de fond
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", height: "100vh", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <div className="overlay shadow-xl">
      <h1 style={{fontWeight: "bold", fontSize: "48px", color: "white"}} >Bienvenue sur HairSwift</h1>
        <h2 style={{fontSize: "28px", color: "white"}}>Choisissez votre coiffeur</h2>
        <h2 style={{fontSize: "24px", color: "white"}}>Rapide - Simple - Disponible 24h/24</h2>
        <input type="text" placeholder="Rechercher un salon de coiffure..." className="search-bar" />
      </div>
    </div>
  );
}

export default App;
