import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  console.log(book)

  const bookDetail = async () => {
    try {
      const data = await fetch(`https://epibooks.onrender.com/${bookId}`);
      const response = await data.json();
      setBook(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookDetail();
  }, [bookId]);

  return (
    <div>
      <h1>Dettagli del libro</h1>
      <p>ASIN: {asin}</p>
      {/* Mostra i dettagli del libro */}
    </div>
  );
};

export default BookDetails;