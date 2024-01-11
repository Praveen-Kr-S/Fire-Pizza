import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
  return (
    <Container fluid>
        <Row className='justify-content-center text-align-center mt-4'>
            <Col lg={8}>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            className='d-block w-100' 
                            src={require('../assets/one.jpeg')} 
                            alt="First Slide" 
                        />
                        <Carousel.Caption>
                            <h3>Margherita</h3>
                            <p className='d-none d-sm-block'>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img 
                            className='d-block w-100'
                            src={require('../assets/two.jpeg')} alt="Second Slide" 
                        />
                        <Carousel.Caption>
                            <h3>Cheese Pizza</h3>
                            <p className='d-none d-sm-block'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img 
                            className='d-block w-100'
                            src={require('../assets/three.jpeg')} alt="Third Slide" 
                        />
                        <Carousel.Caption>
                            <h3>Pepporoni</h3>
                            <p className='d-none d-sm-block'>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        <div className='text-center'>
            <h2 className='display-5 mt-3'>Pizzas for Every Occation!</h2>
            <p className="lead text-muted">Lorem ipsum dolor sit consectetur.</p>
        </div>  
    </Container >
  )
}

export default Banner
