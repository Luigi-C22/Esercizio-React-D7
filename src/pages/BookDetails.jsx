import React from 'react';

const BookDetails = ({ match }) => {
  const { asin } = match.params;

  // Utilizza l'asin per ottenere i dettagli del libro

  return (
    <div>
      <h1>Dettagli del libro</h1>
      <p>ASIN: {asin}</p>
      {/* Mostra i dettagli del libro */}
    </div>
  );
};

export default BookDetails;