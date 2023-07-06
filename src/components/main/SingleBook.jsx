import React, { useState } from "react";
//import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../main/Card.css';

const SingleBook = ({ img, asin, title, price, category, onClick, selected }) => {
  const [isSelected, setIsSelected] = useState(selected);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
    onClick(asin);
  };

  return (
    <Card
      style={{ width: '14rem', height: '31rem', cursor: 'pointer' }}
      onClick={toggleSelected}
      className={`single-book-card ${isSelected ? 'selected' : ''}`}
    >
      <Card.Img variant="top" src={img} height={270} />
      <Card.Body>
        <Card.Title className="titleEllips">{title}</Card.Title>
        <Card.Title className="categoryText">Genere: {category}</Card.Title>
        <Card.Title className="priceStyle">€ {price}</Card.Title>
        <Card.Title>Cod. {asin}</Card.Title>
        <div className="d-flex flex-wrap gap-1">
          <Button variant="warning">Commenti</Button>
          <Button variant="success">Dettagli</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;