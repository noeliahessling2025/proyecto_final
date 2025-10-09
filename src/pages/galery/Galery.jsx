import React from 'react';
import coberturas1 from '../../images/coberturas1.jpeg';
import imagenMoto from '../../images/moto.jpeg';
import imagenAuto from '../../images/auto.jpeg';
import imagenTaxi from '../../images/taxi.jpeg';

export default function Galery() {
  return (
    <div style={{ padding: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2>COBERTURAS</h2>
      <img 
        src={coberturas1} 
        alt="coberturas1" 
        style={{ width: '60%', height: 'auto', borderRadius: '8px', marginBottom: '2rem' }} 
      />

      <h2>DETALLE DE COBERTURAS:</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h5>Seguro para Moto: Rdad. Civil contra terceros (incluye grúa). Precio mensual: $ 10.000</h5>
          <img src={imagenMoto} alt="Moto" style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '12px' }} />
        </div>

        <div>
          <h5>Seguro para Auto: Rdad. Civil contra terceros (incluye grúa). Precio mensual: $ 25.000</h5>
          <img src={imagenAuto} alt="Auto" style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '12px' }} />
        </div>

        <div>
          <h5>Seguro para Taxi/Remise: Rdad. Civil contra terceros (no incluye grúa). Precio mensual: $ 45.000</h5>
          <img src={imagenTaxi} alt="Taxi" style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '12px' }} />
        </div>
      </div>
    </div>
  );
}

