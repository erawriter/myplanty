import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { ImDroplet } from "react-icons/im";
import { ImLeaf } from "react-icons/im";
import { ImSun } from "react-icons/im";
import { ImMeter2 } from "react-icons/im";

function PlantCareGrid() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/550b57f0e4b03338e0474a39/1483294179159-A3E9JVNFKZA5U7HH905Q/image-asset.jpeg?format=2500w" />
        <Card.Body>
          <Card.Title>Sunlight <ImSun stack='4x'/></Card.Title>
          <Card.Text>
          It’s no doubt that making sure plants are receiving adequate lighting can be a balancing act. Too much, and they get scorch marks, the plant equivalent of a sunburn. Too little, and they don’t perform well or use up their water quick enough, leading to root rot.
          </Card.Text>
          <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/550b57f0e4b03338e0474a39/1485625249321-LL1MC0P45UYP67L4BV8Y/birdofparadise.jpg?format=750w" />
        </Card.Body>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1521488691592-4bbb9eb784f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/550b57f0e4b03338e0474a39/1625772863487-PY1KZALH3UYHCBB4Q5HT/IMG_4777.jpg?format=1500w" />
        <Card.Body>
          <Card.Title>Water <ImDroplet stack='4x'/></Card.Title>
          <Card.Text>
          Watering your plants thoroughly promotes healthy root growth. Not only does this ensure that all of your plant’s roots get access to water. When it comes to planters without drainage holes at the bottom, it’s crucial to be mindful of the amount of water you’re giving your plant at once so that stagnant water doesn’t sit in the soil and cause roots to rot. In this case, it can be best to err on the side of under-watering or, if it’s a smaller planter, taking it to the sink and slowly tilting the planter to allow excess water to drain out the top{' '}
          </Card.Text>
          <Card.Img variant="top" src="https://images.everydayhealth.com/images/houseplants-that-are-good-for-your-health-00-intro-1440x810.jpg?w=720" />
          <br />
          <Card.Title>Temperature <ImMeter2 stack='4x'/></Card.Title>
          <Card.Text>
          When it comes to planters without drainage holes at the bottom, it’s crucial to be mindful of the amount of water you’re giving your plant at once so that stagnant water doesn’t sit in the soil and cause roots to rot. In this case, it can be best to err on the side of under-watering or, if it’s a smaller planter, taking it to the sink and slowly tilting the planter to allow excess water to drain out the top.{' '}
          </Card.Text>
          <Card.Img variant="top" src="https://www.gannett-cdn.com/-mm-/77883d3563688208ca0f9752c96136db7acb39b2/c=0-255-4898-3010/local/-/media/2020/08/17/PalmBeachPost/ghows-LK-200628260-1c0ccfb3.jpg?width=3200&height=1800&fit=crop&format=pjpg&auto=webp" />
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/550b57f0e4b03338e0474a39/19682f23-7e5e-4c86-958a-277bf4961c75/stump.gif?format=1500w" />
        <Card.Body>
          <Card.Title>Fertilizer <ImLeaf stack='4x'/></Card.Title>
          <Card.Text>
          Sufficient sunlight and water are often seen as the essentials to plant survival, but one aspect that is sometimes overlooked when it comes to plant care is fertilization. As your plants are cared for and watered, they will use up the available nutrients in their soil, and they will then rely on you to replenish those nutrients for continued growth and health.When you fertilize in accordance with growth, your plants have the opportunity to use more of the nutrients that are available to them. 
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1637500980709-6e65a6c2418a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default PlantCareGrid;