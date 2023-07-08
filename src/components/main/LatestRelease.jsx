import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleBook from "./SingleBook";
import CommentsArea from "./CommentsArea";
import Spinner from 'react-bootstrap/Spinner';
import '../main/Card.css';


const LatestRelease = ({ query }) => {         // la arrow function accetta l'oggetto query per filtrare i libri in base alla ricerca
    const [books, setBooks] = useState([]);    // la variabile inizializzata con un array vuoto '[]' che conterrà i libri ottenuti dall'API 
    const [selectedBook, setSelectedBook] = useState(null); // la variabile inizializzata con 'null' tiene traccia del libro selezionato

    const getBooksFromApi = async () => {       // ottengo i dati dei libri dall'API e li imposto nello stato 'books' tramite la funzione 'setBooks'
        try {
            const data = await fetch("https://epibooks.onrender.com/");
            const response = await data.json();
            setBooks(response);
        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {   // esegue il codice all'avvio del componente. La funzione passata a 'useEffect' viene chiamata dopo che il componente è stato montato 
        getBooksFromApi();  //getBooksFromApi viene chiamata per ottenere i libri dall'API
    }, []);                 //l'array vuoto passato come secondo argomento assicura che il codice venga eseguito solo una volta 

    const filteredBooks = books.filter((book) =>  //filtra i libri in base alla query di ricerca
        book.title.toLowerCase().includes(query.toLowerCase())

    );
    const handleBookClick = (asin) => {   //gestisce il clic sul libro relativamente al suo asin
        setSelectedBook(asin);

    };

    return (
        <>
            <Container>
                <Row>
                    <Col xs={8} style={{ overflowY: 'scroll', maxHeight: 'calc(100vh - 130px)' }} className="d-flex flex-wrap gap-3"> {/* colonna di sinistra */}

                        {filteredBooks &&
                            filteredBooks.map((book) => (
                                <SingleBook
                                    key={book.asin}
                                    img={book.img}
                                    asin={book.asin}
                                    category={book.category}
                                    title={book.title}
                                    price={book.price}
                                    onClick={() => handleBookClick(book.asin)}
                                    selected={book === selectedBook}
                                />
                            ))};

                    </Col>
                    <Col xs={4}   > {/* colonna di destra */}
                        <h3 className="commentTitle sticky-top">Comment Area</h3><h6>Select a book for comments</h6>
                        {selectedBook ? (  // utilizza l'operatore condizionale per selezionare il libro
                            <div className="boxComment" style={{ overflowY: 'scroll', maxHeight: 'calc(100vh - 130px)' }}>
                                <CommentsArea asin={selectedBook} /></div>
                        ) : (

                            <Spinner animation="border" variant="danger" role="status">
                                <span className='loading-text'>Loading...</span>
                            </Spinner>

                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );

};
export default LatestRelease;