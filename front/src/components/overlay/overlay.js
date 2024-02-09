import "./overlay.css";
import logo from "../overlay/logo.png";
function Overlay() {
  return (
    <>
      <div className="overlay">
      <img src={logo} className="logo animate-jump-in" alt="Logo" />      
      <span className="text-2xl text-white font-light my-4 animate-fade-up ">
          Rapide • Efficace • Disponible 24h/24
        </span>
        <div className="flex items-center justify-center animate-fade-up">
        </div>
      </div>
    </>
  );
}

export default Overlay;
