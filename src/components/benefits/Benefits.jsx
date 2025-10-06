import React from 'react';


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
    </section>
  );
};

export default Benefits;
