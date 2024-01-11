import React, { useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Pickoftheweek = () => {

    const [show, setShow] = useState(false);

  return (
    <section id='musttry' className='my-4'>
        <div className='text-center  my-2'>
            <h2 className='text-primary display-5'><i className="bi bi-search-heart"></i> Pick of the Week!</h2>
        </div>
        <Container>
            <Row className='align-items-center'>
                <Col md={7}>
                    <Image src={require('../assets/center.jpeg')} fluid={true} alt='Pizza' rounded></Image>
                </Col>
                <Col md={5}>
                    <div className='p-3'>
                        <h2 className="h1">Double Cheese Fajita</h2>
                        <p className="lead text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, odit aliquid? Minima eligendi debitis saepe tempora.
                        </p>
                        <Button variant='warning' onClick={() => setShow(true)}><i className="bi bi-basket text-secondary"></i> Buy Now</Button>
                    </div>
                </Col>
            </Row>

            <ToastContainer
                className="position-fixed bottom-0 end-0 p-3"
                position='bottom-end'
                style={{ zIndex: 1 }}
            >
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide >
                    <Toast.Header closeButton={false}>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Added!</strong>
                    <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>item added to cart.</Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    </section>
  )
}

export default Pickoftheweek