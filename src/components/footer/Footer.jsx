import React from 'react';
import styles from './Footer.module.css';
import '../../App.css'

// Importa los íconos que necesitas de react-icons
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p>&copy; 2025 Mi Empresa. Todos los derechos reservados.</p>
        <p>SSN N° de inscripción: 1234</p>
        
        {/* Sección de redes sociales */}
        <div className={styles.socialMedia}>
          <p>Síguenos en nuestras redes sociales:</p>
          <div className={styles.socialLinks}>
            {/* Reemplaza los 'href' con los enlaces a tus perfiles */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
        
        <div className={styles.footerLinks}>
          <div>
              <span>Alte. Brown 366-Salta Capital</span><br />
              <span>seguros_hessling10@gmail.com</span><br />
              <span>WhatsApp (387)4484999</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;