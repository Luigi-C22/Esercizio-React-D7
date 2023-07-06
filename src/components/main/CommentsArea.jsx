  import React, { useState, useEffect } from 'react';
  import { ListGroup, Form, Button, Spinner }from 'react-bootstrap';
  
  const CommentsArea = ({ asin }) => {
    const [bookComments, setBookComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [newRate, setNewRate] = useState('');
    const [selectedCommentId, setSelectedCommentId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    const getCommentsFromBook = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNzgxNmI5YzBmNzAwMTQ0ODRmZmMiLCJpYXQiOjE2ODc3MTkzNTcsImV4cCI6MTY4ODkyODk1N30.hL_jIPOedF3p1A1A0T5shHH3PUZLcBPxuY_kAXGMWFE',
            },
          }
        );
        const data = await response.json();
        setBookComments(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
  
    const postComment = async () => {
      try {
        await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNzgxNmI5YzBmNzAwMTQ0ODRmZmMiLCJpYXQiOjE2ODc3MTkzNTcsImV4cCI6MTY4ODkyODk1N30.hL_jIPOedF3p1A1A0T5shHH3PUZLcBPxuY_kAXGMWFE',
          },
          body: JSON.stringify({
            comment: newComment,
            rate: newRate,
            elementId: asin,
          }),
        });
  
        setNewComment('');
        setNewRate('');
        getCommentsFromBook();
      } catch (error) {
        console.log(error);
      }
    };
  
    const deleteComment = async (commentId) => {
      try {
        await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
          {
            method: 'DELETE',
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNzgxNmI5YzBmNzAwMTQ0ODRmZmMiLCJpYXQiOjE2ODc3MTkzNTcsImV4cCI6MTY4ODkyODk1N30.hL_jIPOedF3p1A1A0T5shHH3PUZLcBPxuY_kAXGMWFE',
            },
          }
        );
        getCommentsFromBook();
      } catch (error) {
        console.log(error);
      }
    };
  
    const updateComment = async (commentId, updatedComment) => {
      try {
        if (commentId ===selectedCommentId) {
          await fetch(
            `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization:
                  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNzgxNmI5YzBmNzAwMTQ0ODRmZmMiLCJpYXQiOjE2ODc3MTkzNTcsImV4cCI6MTY4ODkyODk1N30.hL_jIPOedF3p1A1A0T5shHH3PUZLcBPxuY_kAXGMWFE',
              },
              body: JSON.stringify({
                comment: updatedComment,
              }),
            }
          );
  
          getCommentsFromBook();
          setSelectedCommentId(null);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getCommentsFromBook();
    }, [asin]);
  
    return (
      <>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <>
            {bookComments.map((comment) => (
              <ListGroup
                key={comment._id}
                className="d-flex justify-content-between align-items-start"
                as="ol"
                numbered
              >
                <div className="ms-2 me-auto">
                  {selectedCommentId === comment._id ? (
                    <Form.Control
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                  ) : (
                    <div>{comment.comment}</div>
                  )}
                  <div>Voto: {comment.rate}</div>
                </div>
                <div>
                  {selectedCommentId === comment._id ? (
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => updateComment(comment._id, newComment)}
                    >
                      Salva
                    </Button>
                  ) : (
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => setSelectedCommentId(comment._id)}
                    >
                      Modifica
                    </Button>
                  )}
                  <Button
                    variant="danger mx-1"
                    size="sm"
                    onClick={() => deleteComment(comment._id)}
                  >
                    Elimina
                  </Button>
                </div>
              </ListGroup>
            ))}
  
            <Form.Group>
              <Form.Label>Aggiungi una recensione:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci un commento..."
                className="custom-input"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Form.Control
                type="number"
                placeholder="Inserisci il voto (da 1 a 5)"
                min={1}
                max={5}
                value={newRate}
                onChange={(e) => setNewRate(e.target.value)}
              />
            </Form.Group>
            <Button onClick={postComment}>Invia</Button>
          </>
        )}
      </>
    );
  };
  
  export default CommentsArea;