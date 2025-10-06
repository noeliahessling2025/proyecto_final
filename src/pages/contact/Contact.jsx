// FormularioUsuario.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import imagenFormulario from '../../images/formulario.jpeg'
import styles from './contact.module.css'

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
        <label htmlFor="nombre">Nombre y apellido:</label>
        <input
          id="nombre"
          {...register('nombre', {
            required: 'El nombre es obligatorio',
            minLength: {
              value: 3,
              message: 'El nombre debe tener al menos 3 caracteres',
            },
          })}
        />
        {errors.nombre && <p className="error">{errors.nombre.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'El correo es obligatorio',
            pattern: {
              value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
              message: 'Formato de correo no válido',
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
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
  {errors.mensaje && <p className="error">{errors.mensaje.message}</p>}
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
