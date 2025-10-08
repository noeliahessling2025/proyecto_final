// src/pages/productos/ProductCreate.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createItem } from '../../api/api';
import toast from 'react-hot-toast';
const COLLECTION_NAME = 'productos';
const styles = {
    container: { maxWidth: '800px', margin: '2rem auto', padding: '2rem', fontFamily: 'sans-serif' },
    formCard: { background: '#f9f9f9', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
    form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
    input: { padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' },
    button: { padding: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem', transition: 'background-color 0.2s', color: 'white' },
    error: { color: '#e74c3c', marginTop: '-0.5rem' },
};

export default function ProductCreate() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const productData = {
            ...data,
            precio: parseFloat(data.precio),
            stock: parseInt(data.stock, 10),
        };
        const newItem = await createItem(COLLECTION_NAME, productData);
        if (newItem) {
            toast.success('Producto creado con éxito.');
            navigate('/productos'); // Redirige al listado
        } else {
            toast.error('Error al crear el producto.');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formCard}>
                <h2>Agregar Nuevo Producto</h2>
                <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                    <input style={styles.input} placeholder="Nombre" {...register("nombre", { required: "El nombre es obligatorio" })} />
                    {errors.nombre && <p style={styles.error}>{errors.nombre.message}</p>}
                    
                    <input style={styles.input} placeholder="Precio" type="number" step="0.01" {...register("precio", { required: "El precio es obligatorio" })} />
                    {errors.precio && <p style={styles.error}>{errors.precio.message}</p>}

                    <input style={styles.input} placeholder="Stock" type="number" {...register("stock", { required: "El stock es obligatorio" })} />
                    {errors.stock && <p style={styles.error}>{errors.stock.message}</p>}

                    <input style={styles.input} placeholder="URL de la imagen" {...register("image", { required: "La imagen es obligatoria" })} />
                    {errors.image && <p style={styles.error}>{errors.image.message}</p>}

                    <button type="submit" style={{ ...styles.button, background: '#3498db' }}>
                        Guardar Producto
                    </button>
                </form>
            </div>
        </div>
    );
}