// src/pages/productos/ProductList.jsx

import React, { useState, useEffect } from 'react'; // Se mantienen los mismos imports
import { Link } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard'
import { getItems, createItem, updateItem, deleteItem, getItemById } from '../../api/api';


const COLLECTION_NAME = 'productos';

// A tu objeto de estilos original, le agregamos los estilos para el spinner
const styles = {
    container: { fontFamily: 'sans-serif', padding: '2rem', maxWidth: '1200px', margin: '0 auto' , height: '100vh' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' },
    title: { margin: 0 },
    addButton: { textDecoration: 'none', padding: '0.8rem 1.5rem', background: '#27ae60', color: 'white', borderRadius: '4px', fontSize: '1rem' },
    listContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' },
    // --- ADICIÓN 1: Estilos para el spinner ---
    spinnerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
    },
    spinner: {
        border: '6px solid #f3f3f3',
        borderTop: '6px solid #3498db',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        animation: 'spin 1s linear infinite',
    },
};

export default function ProductList() {
    // --- ADICIÓN 2: Un nuevo estado para controlar la carga ---
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true); // Se inicia en 'true'

    useEffect(() => {
        const fetchProductos = async () => {
            const items = await getItems(COLLECTION_NAME);
            setProductos(items);
            // --- ADICIÓN 3: Se cambia el estado a 'false' cuando los datos llegan ---
            setLoading(false); 
        };
        fetchProductos();
    }, []);

    return (
        <div style={styles.container}>
            {/* Se agrega una etiqueta <style> para la animación del spinner. Sigue siendo parte de este componente. */}
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
            
            <div style={styles.header}>
                <h1 style={styles.title}>Nuestros Servicios</h1>
                <Link to="/productos/nuevo" style={styles.addButton}>+ Agregar Servicio</Link>
            </div>

            {/* --- ADICIÓN 4: Lógica condicional para mostrar el spinner o la lista --- */}
            {loading ? (
                // Si 'loading' es true, se muestra esto:
                <div style={styles.spinnerContainer}>
                    <div style={styles.spinner}></div>
                </div>
            ) : (
                // Si 'loading' es false, se muestra tu lista original:
                <div style={styles.listContainer}>
                    {productos.map((producto) => (
                        <ProductCard key={producto.id} producto={producto} />
                    ))}
                </div>
            )}
        </div>
    );
}