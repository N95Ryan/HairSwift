import React from "react";
import background from "./images/background.jpg"; // Importez l'image de fond
import "./App.css";
import Overlay from "./components/overlay/overlay";
import Navbar from "./components/navbar";

function App() {
  return (
    <><div
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
      <Overlay />
    </div>
    </> 
  );
}

export default App;
