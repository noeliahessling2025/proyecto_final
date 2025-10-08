import React from 'react'
import coberturas1 from '../../images/coberturas1.jpeg'

import coberturas3 from '../../images/coberturas3.jpeg'
import imagenMoto from '../../images/moto.jpeg'
import imagenAuto from '../../images/auto.jpeg'
import imagenTaxi from '../../images/taxi.jpeg'

export default function Galery() {
  return (
    <div>
    <h2>COBERTURAS</h2>
    <img src={coberturas1} alt="coberturas1" style={{ width: '500px' }} /><br />
    <h2>DETALLE DE COBERTURAS:</h2>
    <h3>Seguro para Moto: Rdad. Civil contra terceros (incluye grúa).</h3>
    <img src={imagenMoto} style={{ maxWidth: '30%', borderRadius: '12px', marginBottom: '2rem' }} />
    <h3>Seguro para Auto: Rdad. Civil contra terceros (incluye grúa).</h3>
    <img src={imagenAuto} style={{ maxWidth: '30%', borderRadius: '12px', marginBottom: '2rem' }} />
    <h3>Seguro para Taxi/Remise: Rdad. Civil contra terceros (no incluye grúa).</h3>
    <img src={imagenTaxi} style={{ maxWidth: '30%', borderRadius: '12px', marginBottom: '2rem' }} />

    </div>
  );
}
