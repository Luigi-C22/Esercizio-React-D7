import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleBook from "./SingleBook";
import CommentsArea from "./CommentsArea";
import Spinner from 'react-bootstrap/Spinner';
import '../main/Card.css';

//const LatestRelease = () => {
const LatestRelease = ({ query }) => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    const getBooksFromApi = async () => {
        try {
            const data = await fetch("https://epibooks.onrender.com/");
            const response = await data.json();
            setBooks(response);
        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        getBooksFromApi();
    }, []);

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())

    );
    const handleBookClick = (asin) => {
        setSelectedBook(asin);

    };

    return (
        <>
            {/* <SearchBar books = {books} setBooks = {setBooks} getBooks = {getBooksFromApi} /> */}
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
                        <h3 className="commentTitle sticky-top">Comment Area</h3>
                        {selectedBook ? (
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