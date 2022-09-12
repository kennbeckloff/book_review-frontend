import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import '../App.css';

function Books({ authors, averageRating, description, id, image, language, pageCount, publishedDate, publisher, ratingsCount, title }) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

   

    return(
        <div className="container" key={id}>
            <div className="image" onClick={handleShow}>
                <img src={image} alt={title} />
            </div>
            <div>                
                <p>Author: {authors}</p>
            </div>

            <Modal show={show} onHide={handleClose}>
            <p id="gmi"><img src={image} alt={title} /></p>
                <Modal.Header closeButton>                
                    <Modal.Title id="gmo">{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{description}</p>
                    <p>Publisher: {publisher} | Date: {publishedDate}</p>
                    <p>Rating: {averageRating} ({ratingsCount})</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                            <Form.Label>Add Review</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="add your " autoFocus />
                        </Form.Group>
                    </Form>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Books;