import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import background from "./images/background.jpg"; // Importez l'image de fond
import "./App.css";
import Navbar from "./components/navbar";
import Login from "./Pages/Login"; // Importez la page de connexion
import Services from "./Pages/Services"; // Importez la page de services
import Reservation from "./Pages/Reservation";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Navbar />
        <Routes>
          {/* Route pour la page de connexion */}
          <Route path="/login" element={<LoginWithoutBackground />} />
          <Route path="/services" element={<Services />} />
          <Route path="reservation" element={<Reservation />} />
        </Routes>
      </div>
    </Router>
  );
}

// Composant Login sans le fond d'écran ni le logo
function LoginWithoutBackground() {
  return <Login />;
}

export default App;
