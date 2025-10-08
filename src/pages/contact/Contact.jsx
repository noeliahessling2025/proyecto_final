// FormularioUsuario.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import imagenFormulario from '../../images/formulario.jpeg'
import styles from './Contact.module.css'

const FormularioUsuario = ({ onSubmit, defaultValues = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Nombre */}
      <div>
        <h2>FORMULARIO DE CONTACTO</h2><br />
        <label htmlFor="nombre">Nombre y apellido:</label>
        <input
          id="nombre"
          {...register('nombre', {
            required: 'El nombre y apellido es obligatorio',
            minLength: {
              value: 3,
              message: 'El nombre y apellido debe tener al menos 3 caracteres',
            },
          })}
        />
        {errors.nombre && <p className={styles.error}>{errors.nombre.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'El e-mail es obligatorio',
            pattern: {
              value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
              message: 'Formato de e-mail no válido',
            },
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      {/* Mensaje */}
      <div>
  <label htmlFor="mensaje">Mensaje:</label>
  <textarea
    id="mensaje"
    rows="4"
    {...register('mensaje', {
      required: 'El mensaje es obligatorio',
      minLength: {
        value: 10,
        message: 'El mensaje debe tener al menos 10 caracteres',
      },
    })}
  />
  {errors.mensaje && <p className={styles.error}>{errors.mensaje.message}</p>}
</div>

      {/* Botón de envío */}
      <button type="submit">Enviar mensaje</button><br />
      <img
      src={imagenFormulario}
      style={{ width: '200px', height: 'auto', marginBottom: '1rem' }}
    />

    </form>
    
  );
};

export default FormularioUsuario;


