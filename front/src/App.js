import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import background from "./images/background.jpg";
import "./App.css";
import Navbar from "./components/navbar";
import Overlay from "./components/overlay/overlay";
import Login from "./Pages/Login";
import Services from "./Pages/Services";
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
          <Route path="/" element={<Overlay />} />
          <Route path="/login" element={<LoginWithoutBackground />} />
          <Route path="/services" element={<Services />} />
          <Route path="reservation" element={<Reservation />} />
        </Routes>
      </div>
    </Router>
  );
}

function LoginWithoutBackground() {
  return <Login />;
}

export default App;
