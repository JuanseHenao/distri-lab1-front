import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./index.css"; // Importa tu archivo CSS personalizado aquí
import HomePage from "./pages/HomePage";

// Componentes para las diferentes páginas

const AboutPage = () => (
  <div>
    <h1>Acerca de</h1>
    <p>Información sobre nosotros</p>
  </div>
);

const ContactPage = () => (
  <div>
    <h1>Contacto</h1>
    <p>Información de contacto</p>
  </div>
);

function App() {
  return <HomePage />;
}

export default App;
