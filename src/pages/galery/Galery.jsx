import React from 'react'
import coberturas1 from '../../images/coberturas1.jpeg'

import coberturas3 from '../../images/coberturas3.jpeg'

export default function Galery() {
  return (
    <div>
    <h2>COBERTURAS</h2>
    <img src={coberturas1} alt="coberturas1" style={{ width: '500px' }} /><br />
    <h2>DETALLE DE COBERTURAS:</h2>
    <h3>Seguro para moto: Rdad. Civil contra terceros (incluye grúa).</h3>
    <h3>Seguro para auto: Rdad. Civil contra terceros (incluye grúa).</h3>
    <h3>Seguro para taxi/remise: Rdad. Civil contra terceros (no incluye grúa).</h3>
    <img src={coberturas3} alt="coberturas3" style={{ width: '200px' }} /><br />

    </div>
  );
}
