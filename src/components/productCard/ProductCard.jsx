import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación

// --- Pasamos los mismos estilos desde el componente padre ---
const styles = {
    productCard: { background: 'white', border: '1px solid #eee', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'transform 0.2s' },
    productImage: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', background: '#f0f0f0' },
    productInfo: { flexGrow: 1, marginTop: '1rem' },
    productName: { fontSize: '1.2rem', fontWeight: 'bold' },
    productPrice: { color: '#27ae60', fontSize: '1.1rem' },
    button: { padding: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem', transition: 'background-color 0.2s', textAlign: 'center', textDecoration: 'none' },
};

export default function ProductCard({ producto }) {
    // Si el producto no existe, no renderizamos nada
    if (!producto) return null;

    return (
        <div 
            style={styles.productCard}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'} 
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <productos 
                src={producto.image} 
                alt={producto.nombre} 
                style={styles.productImage} 
                onError={(e) => e.target.src='https://placehold.co/400x400/eee/ccc?text=No+Imagen'}
            />
            <div style={styles.productInfo}>
                <h3 style={styles.productName}>{producto.nombre}</h3>
                <p style={styles.productPrice}>${producto.precio?.toFixed(2)}</p>
            </div>
            {/* Este botón ahora es un Link que navega a la ruta del detalle del producto */}
            <Link 
                to={`/producto/${producto.id}`} 
                style={{ ...styles.button, background: '#3498db', color: 'white', marginTop: '1rem' }}
            >
                Ver Servicio
            </Link>
        </div>
    );
}