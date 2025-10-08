import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getItemById, updateItem, deleteItem } from '../../api/api';
import toast from 'react-hot-toast'; // Asegúrate de tener instalado 'react-hot-toast'

const COLLECTION_NAME = 'productos';

// Estilos completos para el componente
const styles = {
    container: { maxWidth: '800px', margin: '2rem auto', padding: '2rem', fontFamily: 'sans-serif', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', minHeight: '50vh' },
    spinnerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40vh',
    },
    spinner: {
        border: '6px solid #f3f3f3',
        borderTop: '6px solid #3498db',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        animation: 'spin 1s linear infinite',
    },
    error: { textAlign: 'center', fontSize: '1.5rem', color: '#e74c3c', paddingTop: '2rem' },
    content: { display: 'flex', gap: '2rem', flexWrap: 'wrap' },
    image: { width: '100%', maxWidth: '300px', height: '300px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #eee' },
    info: { flex: 1, minWidth: '300px' },
    name: { fontSize: '2.2rem', margin: '0 0 1rem' },
    price: { fontSize: '2rem', color: '#27ae60', margin: '1rem 0', fontWeight: 'bold' },
    stock: { fontSize: '1.2rem', color: '#7f8c8d' },
    buttonGroup: { display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' },
    button: { flex: 1, textDecoration: 'none', textAlign: 'center', padding: '0.8rem 1.5rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem', transition: 'background-color 0.2s', color: 'white', minWidth: '120px' },
    backButton: { display: 'inline-block', marginTop: '2rem', textDecoration: 'none', padding: '0.8rem 1.5rem', background: '#95a5a6', color: 'white', borderRadius: '4px' },
    form: { display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' },
    input: { padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' },
    errorMessage: { color: '#ef4444', marginTop: '-0.5rem', fontSize: '0.875rem' },
};

export default function ProductDetail() {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const fetchProduct = async () => {
        const item = await getItemById(COLLECTION_NAME, id);
        if (item) {
            setProducto(item);
            // Llenamos el formulario con los datos existentes
            setValue("nombre", item.nombre);
            setValue("precio", item.precio);
            setValue("stock", item.stock);
            setValue("image", item.image);
        }
        setLoading(false);
    };

    useEffect(() => {
        // Al montar o si el ID cambia, buscamos el producto
        fetchProduct();
    }, [id]);

    const onUpdateSubmit = async (data) => {
        const productData = {
            ...data,
            precio: parseFloat(data.precio),
            stock: parseInt(data.stock, 10),
        };

        const success = await updateItem(COLLECTION_NAME, id, productData);
        if (success) {
            toast.success('Producto actualizado con éxito.');
            setIsEditing(false); // Salimos del modo edición
            fetchProduct(); // Recargamos los datos para ver los cambios
        } else {
            toast.error('Error al actualizar el producto.');
        }
    };

    const handleDelete = async () => {
        if (window.confirm(`¿Estás seguro de que quieres eliminar "${producto.nombre}"?`)) {
            const success = await deleteItem(COLLECTION_NAME, id);
            if (success) {
                toast.success('Producto eliminado con éxito.');
                navigate('/productos'); // Redirige al listado
            } else {
                toast.error('Hubo un error al eliminar el producto.');
            }
        }
    };

    const renderContent = () => {
        if (loading) {
            return (
                <div style={styles.spinnerContainer}>
                    <div style={styles.spinner}></div>
                </div>
            );
        }

        if (!producto) {
            return <div style={styles.error}>Producto no encontrado.</div>;
        }

        if (isEditing) {
            return (
                <div>
                    <h2>Editando: {producto.nombre}</h2>
                    <form onSubmit={handleSubmit(onUpdateSubmit)} style={styles.form}>
                        <input style={styles.input} placeholder="Nombre" {...register("nombre", { required: "El nombre es obligatorio" })} />
                        {errors.nombre && <p style={styles.errorMessage}>{errors.nombre.message}</p>}
                        
                        <input style={styles.input} placeholder="Precio" type="number" step="0.01" {...register("precio", { required: "El precio es obligatorio" })} />
                        {errors.precio && <p style={styles.errorMessage}>{errors.precio.message}</p>}

                        <input style={styles.input} placeholder="Stock" type="number" {...register("stock", { required: "El stock es obligatorio" })} />
                        {errors.stock && <p style={styles.errorMessage}>{errors.stock.message}</p>}

                        <input style={styles.input} placeholder="URL de la imagen" {...register("image", { required: "La imagen es obligatoria" })} />
                        {errors.image && <p style={styles.errorMessage}>{errors.image.message}</p>}

                        <div style={styles.buttonGroup}>
                            <button type="submit" style={{...styles.button, background: '#3498db'}}>Guardar Cambios</button>
                            <button type="button" onClick={() => setIsEditing(false)} style={{...styles.button, background: '#95a5a6'}}>Cancelar</button>
                        </div>
                    </form>
                </div>
            );
        }

        return (
            <div>
                <div style={styles.content}>
                    <img src={producto.image} alt={producto.nombre} style={styles.image} onError={(e) => e.target.src='https://placehold.co/300x300/eee/ccc?text=Error'}/>
                    <div style={styles.info}>
                        <h1 style={styles.name}>{producto.nombre}</h1>
                        <p style={styles.price}>${producto.precio?.toFixed(2)}</p>
                        <p style={styles.stock}>Unidades disponibles: {producto.stock}</p>
                        <div style={styles.buttonGroup}>
                            <button onClick={() => setIsEditing(true)} style={{...styles.button, background: '#f1c40f'}}>Editar</button>
                            <button onClick={handleDelete} style={{...styles.button, background: '#e74c3c'}}>Eliminar</button>
                        </div>
                    </div>
                </div>
                <Link to="/productos" style={styles.backButton}>← Volver al listado</Link>
            </div>
        );
    };

    return (
        <div style={styles.container}>
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
            {renderContent()}
        </div>
    );
}