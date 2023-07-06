import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button, Col, Container, Row } from 'react-bootstrap';

const SearchBar = ({ books, setBooks, getBooks}) => {

const [searchTerm, setsearchTerm] = useState('');

const filterBooks = (e) => {
    e.preventDefault();
    const filterBooks = books.filter((book) => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filterBooks);
};
const handleResetSearchBar = (value) => {
    if (value === '') {
        getBooks()
    }

    setsearchTerm(value);
}
    return (
        <Container>
            <Row>
                <Col>
                    <Form  className='d-flex align-items-center mb-2 mt-2' onSubmit={filterBooks}>
                        <Button 
                        type='submit'>Cerca</Button>
                        <Form.Control  onChange={(e) => handleResetSearchBar(e.currentTarget.value)}
                        type='text' placeholder='Search Book'
                         />
                        
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar