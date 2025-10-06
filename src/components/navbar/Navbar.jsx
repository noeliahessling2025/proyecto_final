// src/components/navbar/Navbar.jsx
import React from 'react';
import logo from '../../images/logogenerico.png';
import styles from './Navbar.module.css'; // Importa los estilos como un objeto

export default function Navbar() {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.navbarCustom}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} className={styles.navbarLogo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`navbar-nav ${styles.navbarNavCustom}`}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <strong>INICIO</strong>
                </a>
              </li>
          
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  <strong>CONTACTO</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/galery">
                  <strong>COBERTURAS</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/productos">
                  <strong>SERVICIOS</strong>
                </a>
              </li>               
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}