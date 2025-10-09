import React from 'react';
import imagenMoto from '../../images/moto.jpeg'
import imagenAuto from '../../images/auto.jpeg'
import imagenTaxi from '../../images/taxi.jpeg'

const benefits = [
  'MOTO',
  'AUTO',
  'TAXI/REMISE',
];

const Benefits = () => {
  return (
    <section className="benefits">
      <h2>Contratá con nosotros tus seguros de:</h2>
      <ul>
        {benefits.map((item, index) => (
          <li key={index}>✅ {item}</li>
        ))}
      </ul>
      <img src={imagenMoto} style={{ maxWidth: '30%', borderRadius: '12px', marginRight: '2%', marginBottom: '2rem' }} />
      <img src={imagenAuto} style={{ maxWidth: '30%', borderRadius: '12px', marginRight: '2%', marginBottom: '2rem' }} />
      <img src={imagenTaxi} style={{ maxWidth: '30%', borderRadius: '12px', marginBottom: '2rem' }} />
    </section>
  );
};

export default Benefits;
