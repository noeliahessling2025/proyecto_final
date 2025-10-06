import React from 'react';

const Quote = () => {
  return (
    <section className="quote-call">
      <h2>Ofrecemos una amplia gama de seguros diseñados para satisfacer cada necesidad.</h2>
      <h4>Conocé nuestras coberturas.</h4>
      <button onClick={() => window.location.href = '/cotizar'}>Coberturas</button>
    </section>
  );
};

export default Quote;
