import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';


function CarouselComp() {
    return (
      <div>
      
            <Carousel_Housing>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('./images/Images-1.jpg')}
                    alt="Philodendron Mincas"
                />
            <Carousel.Caption>
                <h3>Philodendron Mincas</h3>
                <p>I love low light and can thrive even in the dark!</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('./images/Images-2.png')}
                    alt="Scindapsus Silver Satin"
            />
            <Carousel.Caption>
                <h3>Scindapsus Silver Satin</h3>
                <p>I love bright, indirect light, and lots of water.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('./images/Images-3.png')}
                    alt="philodendron"
            />

            <Carousel.Caption>
                <h3>Philodendron</h3>
                <p>
                I love humidity, lots of bright indirect light, and water.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('./images/Images-4.png')}
                    alt="Hoya Silver Flake"
            />

            <Carousel.Caption>
                <h3>Hoya Silver Flake</h3>
                <p>
                I love humidity, lots of bright indirect light, and water.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('./images/Images-5.png')}
                    alt="Schefflera"
            />

            <Carousel.Caption>
                <h3>Schefflera</h3>
                <p>
                I love humidity, lots of bright indirect light, and water.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('./images/Images-6.png')}
                    alt="Calathea lancifolia"
            />

            <Carousel.Caption>
                <h3>Calathea</h3>
                <p>
                I love humidity, lots of bright indirect light, and water.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('./images/Images-7.jpg')}
                    alt="Zebrina"
            />
            <Carousel.Caption>
                <h3>Zebrina</h3>
                <p>
                I love humidity, lots of bright indirect light, and water.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </Carousel_Housing>
      </div>
    )
  }

export default CarouselComp;

const Carousel_Housing = styled.div`
display:block; 

`
