// src/pages/contactos/Contacto.jsx

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getItems, createItem, deleteItem } from '../../api/api'; 
import toast from 'react-hot-toast';
import imagenFormulario from '../../images/formulario.jpeg'
const COLLECTION_NAME = 'contactos';

// Combinamos los estilos de ambos componentes en uno solo
const styles = {
  container: {
    fontFamily: 'sans-serif',
    padding: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  formContainer: {
    padding: '2rem',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    marginBottom: '3rem', // Espacio entre el formulario y la lista
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  listTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '1.5rem',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    color: '#374151',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  inputError: {
    border: '1px solid #ef4444',
  },
  errorMessage: {
    color: '#ef4444',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
  },
  submitButton: {
    width: '100%',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#2563eb',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  },
  th: {
    background: '#f3f4f6',
    padding: '0.75rem',
    textAlign: 'left',
    borderBottom: '2px solid #e5e7eb',
  },
  td: {
    padding: '0.75rem',
    borderBottom: '1px solid #e5e7eb',
    verticalAlign: 'top', // Alinea el contenido arriba
  },
  deleteButton: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#ef4444',
    color: 'white',
    cursor: 'pointer',
  },
  loader: {
    textAlign: 'center',
    fontSize: '1.5rem',
    marginTop: '2rem',
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#6b7280',
    padding: '2rem',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
  },
};

export default function Contacto() {
  // --- ESTADO Y HOOKS ---
  const [contactos, setContactos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // --- LÓGICA DE DATOS (FETCH, CREATE, DELETE) ---

  // Función para obtener todos los contactos
  const fetchContactos = async () => {
    setLoading(true);
    const items = await getItems(COLLECTION_NAME);
    // Opcional: ordenar los mensajes, por ejemplo, por fecha si la tuvieras
    setContactos(items);
    setLoading(false);
  };

  // useEffect para cargar los contactos cuando el componente se monta por primera vez
  useEffect(() => {
    fetchContactos();
  }, []);

  // Función que se ejecuta al enviar el formulario
  const onSubmit = async (data) => {
    try {
      await createItem(COLLECTION_NAME, data);
      toast.success('¡Mensaje enviado con éxito!');
      reset(); // Limpia el formulario
      fetchContactos(); // Vuelve a cargar la lista para mostrar el nuevo mensaje
    } catch (error) {
      toast.error('Hubo un error al enviar el mensaje.');
      console.error("Error al crear contacto: ", error);
    }
  };

  // Función para eliminar un contacto
  const handleDelete = async (id) => {
    if (toast.promise(
      deleteItem(COLLECTION_NAME, id),
      {
        loading: 'Eliminando mensaje...',
        success: 'Mensaje eliminado.',
        error: 'Error al eliminar el mensaje.',
      }
    )) {
      const success = await deleteItem(COLLECTION_NAME, id);
      if (success) {
        // Actualiza el estado local para quitar el item de la UI al instante
        setContactos(contactos.filter(c => c.id !== id));
        toast.success("Mensaje eliminado.");
      } else {
        toast.error("Error al eliminar el mensaje.");
      }
    }
  };

  // --- RENDERIZADO DEL COMPONENTE ---
  return (
    <div style={styles.container}>
      {/* SECCIÓN 1: FORMULARIO PARA CREAR CONTACTO */}
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Formulario de Contacto</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Nombre y Apellido</label>
            <input
              id="name"
              style={{...styles.input, ...(errors.name ? styles.inputError : {})}}
              {...register('name', { required: 'El nombre y apellido es obligatorio' })}
            />
            {errors.name && <p style={styles.errorMessage}>{errors.name.message}</p>}
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>E-mail</label>
            <input
              id="email"
              type="email"
              style={{...styles.input, ...(errors.email ? styles.inputError : {})}}
              {...register('email', { required: 'El e-mail es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Formato de email inválido' } })}
            />
            {errors.email && <p style={styles.errorMessage}>{errors.email.message}</p>}
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Mensaje</label>
            <textarea
              id="message"
              rows="4"
              style={{...styles.input, ...(errors.message ? styles.inputError : {})}}
              {...register('message', { required: 'El mensaje no puede estar vacío' })}
            ></textarea>
            {errors.message && <p style={styles.errorMessage}>{errors.message.message}</p>}
          </div>
          <button type="submit" style={styles.submitButton}>
            Enviar Mensaje
          </button>
          <img src={imagenFormulario} style={{ maxWidth: '30%', borderRadius: '12px', marginBottom: '2rem' }} />
        </form>
      </div>

      {/* SECCIÓN 2: LISTA DE CONTACTOS RECIBIDOS */}
      <div>
        <h2 style={styles.listTitle}>Mensajes Recibidos</h2>
        {loading ? (
          <p style={styles.loader}>Cargando mensajes...</p>
        ) : contactos.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Nombre y Apellido</th>
                <th style={styles.th}>E-mail</th>
                <th style={styles.th}>Mensaje</th>
                <th style={styles.th}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {contactos.map(contacto => (
                <tr key={contacto.id}>
                  <td style={styles.td}>{contacto.name}</td>
                  <td style={styles.td}>{contacto.email}</td>
                  <td style={styles.td}>{contacto.message}</td>
                  <td style={styles.td}>
                    <button onClick={() => handleDelete(contacto.id)} style={styles.deleteButton}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={styles.emptyMessage}>Aún no has recibido ningún mensaje.</p>
        )}
      </div>
    </div>
  );
}