import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function PlantMap() {
    return (
      <Carousel id='plantmap'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://2174520.fs1.hubspotusercontent-na1.net/hubfs/2174520/Blog%20Header%20%283%29-3.jpg"
            alt="The Plant Gallery Denver"
          />
          <Carousel.Caption>
            <h3>The Boho Succulent</h3>
            <p>Succulents, Tropical Plants, Carnivorous Plants, Hosueplants, and More.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0432/5222/0067/files/bggh.outdoor_1944x.jpg?v=1618508373"
            alt="The Boho Succulent"
          />
  
          <Carousel.Caption>
            <h3>Flourish Greenhouse</h3>
            <p>A Greenhouse that teaches sustainability and self love.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.britannica.com/69/123269-050-4F69A7A7/Greenhouse-Braunschweig-Germany.jpg"
            alt="Orion's Flower and Garden"
          />
  
          <Carousel.Caption>
            <h3>Orion's Flower Garden</h3>
            <p>
              Exotic Flowers, Plants, and More!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default PlantMap;