import React from "react";
import "../styles/navbarr.css";

const Navbar: React.FC = () => (
    <nav className="nav-menu">
        <button className="navbar-menu-btn" aria-label="Menu">&#9776;</button>
        <div className="navbar-logo">
            <img src={require("../img/image.png")} alt="Logo" className="navbar-img" />
        </div>
        <li>
            <a href="#" className="navbar-link navbar-accueil">Accueil</a>
        </li>
        <li>
            <a href="#" className="navbar-link">Mon Web Portrait</a>
        </li>
        <li>
            <a href="#" className="navbar-link">Mon site Météo</a>
        </li>
        <li>
            <a href="#" className="navbar-link">Mes jeux</a>
        </li>
        <li>
            <a href="#" className="navbar-link">Mon projet Podcast</a>
        </li>
        <li>
            <a href="#" className="navbar-link navbar-actu">
                Les Actus de Nico
                <span className="navbar-new-badge">New</span>
            </a>
        </li>
        <li>
            <a href="#" className="navbar-link">Contact</a>
        </li>
        <input type="password" placeholder="Mot de passe" className="navbar-input" />
        <button className="navbar-btn-login" disabled>Connectez vous</button>
    </nav>
);

export default Navbar;

