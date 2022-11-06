import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { ImDroplet } from "react-icons/im";
import { ImLeaf } from "react-icons/im";
import { ImSun } from "react-icons/im";
import { ImMeter2 } from "react-icons/im";
import ListGroup from 'react-bootstrap/ListGroup';

function PlantAccordion() {
  return (
    <Accordion className='myaccordion' defaultActiveKey={['0']} >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Trailing Plants</Accordion.Header>
          <Accordion.Body>
            <Card.Text>Trailing Plants grow vines that are luscious and if hung create a dramatic effect. Vines with rootlets should not be allowed to grow on wood houses or wooden parts of brick houses.
            Most vines grow towards light by elongating their stems and attaching to any support available.</Card.Text>
          <ListGroup as="ul">
                <ListGroup.Item as="li" disabled>Sunlight <ImSun stack='4x'/></ListGroup.Item>
                <ListGroup.Item as="li">Water <ImDroplet stack='4x'/></ListGroup.Item>
                <ListGroup.Item as="li" disabled>Fertilizer <ImLeaf stack='4x'/></ListGroup.Item>
                <ListGroup.Item as="li">Temperature <ImMeter2 stack='4x'/></ListGroup.Item>
            </ListGroup> 
          <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1602491674275-316d95560fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" />
        <Card.Body>
          <Card.Title>Golden Pothos</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1602761265250-08beab2b989b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
        <Card.Body>
          <Card.Title>String of Hearts</Card.Title>
          <Card.Text>
          String of hearts (Ceropegia woodii) is a trailing house plant with heart-shaped grey leaves with attractive mottling, and pinkish undersides. In summer it may bear pink, tubular flowers. String of hearts is a succulent plant and is native to South-Africa and Zimbabwe.{' '}
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1602573852058-ef7c665fcd92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
        <Card.Body>
          <Card.Title>Philodendron Scandens Brazil Leaf</Card.Title>
          <Card.Text>
          The philodendron Brasil is a cultivator of the popular heartleaf philodendron and is just as easy to care for. Characterized by dark green, heart-shaped leaves with splashes of variegation in shades of lime green, the Philodendron hederaceum 'Brasil' gained its common name due to its resemblance to the Brazilian flag.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://media.istockphoto.com/photos/indoot-spider-plant-picture-id1162323054?k=20&m=1162323054&s=612x612&w=0&h=ctL_kiRZca98Z1xBF9tydj2mtbFJC_virlTj0uw4zbI=" />
        <Card.Body>
          <Card.Title>Spider Plant</Card.Title>
          <Card.Text>
          The common name of the Spider Plant is not beckoning if you're a little squeamish to the creepy crawlies, But don't pass this one up so fast!These plants bring thoughts of the lush jungles of Southern Africa to your home, the place they are native to. It is one of the best air purifying plants, meaning it will keep your house looking and feeling fresh! 
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3></Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1612363148951-15f16817648f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" />
        <Card.Body>
          <Card.Title>Scindapsus Silver Satin</Card.Title>
          <Card.Text>The Silver Satin (Scindapsus pictus) is native to Southeast Asia and has the reputation of being one of the easiest houseplants to keep alive. It is known for its heart-shaped matte leaves, splashed with spots of iridescent gray, and fast-growing trailing vines. A mature Silver Satin can grow vines between 4-10 feet long depending on conditions.{' '}
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1537039557108-4a42c334fd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
        <Card.Body>
          <Card.Title>Jade Pothos</Card.Title>
          <Card.Text>
          There are plenty of reasons pothos plants are so popular⁠. These attractive vining species thrive indoors, have proven air-purifying qualities, and are so easy to care for that even the brownest thumb houseplant lovers are unlikely to kill them off. There are many types of pothos, and Jade pothos (Epipremnum aureum 'Jade') is one you'll find in many garden centers.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3> 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1611211233623-1b1e2162633f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
        <Card.Body>
          <Card.Title>Heartleaf Philodendron</Card.Title>
          <Card.Text>
          Hailing from South America, Central America, and the Caribbean, heartleaf philodendrons are leggy tropical plants. These exotic growths are some of the easiest houseplants to care for, making them a good DIY hanging plant project.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.etsystatic.com/24047607/r/il/024e61/2611191139/il_1588xN.2611191139_cac8.jpg" />
        <Card.Body>
          <Card.Title>Tradescantia Zebrina</Card.Title>
          <Card.Text>
          Inch plant care requires bright, indirect light. If the light is too dim, the distinctive leaf markings will fade. Keep the soil slightly moist, but don't water directly into the crown as this will cause an unsightly rot. Care should be taken, particularly in winter, that the plant doesn't become too dry.Zebrina, like our other foliage plants, should be watered when the soil begins to dry out. {' '}
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1596724878582-76f1a8fdc24f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=800" />
        <Card.Body>
          <Card.Title>Marble Queen Pothos</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            Perhaps one of the most common (and easy to care for) houseplants available, the marble queen pothos (Epipremnum aureum 'Marble Queen') is a variety of pothos that is characterized by vining foliage that has beautiful white and cream variegation.
            <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Climbing Plants</Accordion.Header>
        <Accordion.Body>
        Many people think climbing plants are only suitable for outdoor spaces like gardens, but did you know they can be cultivated in indoor spaces, as well? Climbing plants add richness and depth to any garden space and with the proper knowledge, you’ll have healthy and luscious climbing plants.
          <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1664633218911-4fef4410ba28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" />
        <Card.Body>
          <Card.Title>Hoya Purple Pride</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1647631703000-b3ca2bcd45e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80" />
        <Card.Body>
          <Card.Title>Hoya Wayetii Tricolor</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1601318215002-09cd016ebf58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
        <Card.Body>
          <Card.Title>String Of Hearts</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1552851292-c1822b46da57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
        <Card.Body>
          <Card.Title>Pilae Plant</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1580063708280-9e06cb88b003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
        <Card.Body>
          <Card.Title>Ivy Falls</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1469533802599-76ee5be68f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <Card.Body>
          <Card.Title>White Grapes</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://i.etsystatic.com/15947956/r/il/c9852f/1797483838/il_1588xN.1797483838_cfil.jpg" />
        <Card.Body>
          <Card.Title>Begonia</Card.Title>
          <Card.Text>
          Because Begonias grow in the shade, their need for water is significantly lower than hanging baskets growing in the sun. Classically a Begonia doesn't need to be watered any more often than once every 5 to 10 days – it sounds kind of crazy, but they easily last that long.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.etsystatic.com/28042517/r/il/a0f60d/3068450347/il_1588xN.3068450347_iekq.jpg" />
        <Card.Body>
          <Card.Title>Creeping Red Emporer</Card.Title>
          <Card.Text>
          Mandevilla is a tropical climbing plant with giant deep red blooms that you can grow during summer and even as a houseplant in winter. Place it in a focal part of your landscape or in a container near a pole or trellis. Then train the long stems as they fill with glossy green leaves and large (2 to 3 inch) flowers..{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.etsystatic.com/35233211/r/il/0653a5/4125918606/il_680x540.4125918606_n29u.jpg" />
        <Card.Body>
          <Card.Title>Baby Blue Eucalyptus</Card.Title>
          <Card.Text>
          This cute eucalyptus is well known as “baby blue” which comes from bluish-gray round foliages. This plant is very aromatic and popular among florists. You can enjoy growing this plant in your garden or enjoy as cut flowers in the vase or even dried flower arrangements !
            Origin: Australia
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
      <Accordion.Header>Tropical Plants</Accordion.Header>
      <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1567748157439-651aca2ff064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Card.Body>
          <Card.Title>Bali Pink Anthurium</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1568576599114-b9aa87edd0e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Card.Body>
          <Card.Title>Pink Ginger Flower</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1548285852-c2c61bf144f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
        <Card.Body>
          <Card.Title>Pink Hibiscus Flower</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1581825357620-908500d7b245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
        <Card.Body>
          <Card.Title>Pink Yellow Orchids</Card.Title>
          <Card.Text>
          Water your Orchids every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1622003443079-d7c075d9f158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" />
        <Card.Body>
          <Card.Title>Dracaena</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1560898126-e68036717f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Card.Body>
          <Card.Title>Tiger Lily</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1562079176-59ab4bdb7d62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
        <Card.Body>
          <Card.Title>Blue Lotus</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
        <Card.Body>
          <Card.Title>Monstera</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.etsystatic.com/23885345/r/il/79702c/3407793142/il_570xN.3407793142_k01b.jpg" />
        <Card.Body>
          <Card.Title>Alocasia Elephant Ear</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
      <Accordion.Header>Flowering Plants</Accordion.Header>
      <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1567748157439-651aca2ff064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Card.Body>
          <Card.Title>Bali Pink Anthurium</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1568576599114-b9aa87edd0e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Card.Body>
          <Card.Title>Pink Ginger Flower</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1548285852-c2c61bf144f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
        <Card.Body>
          <Card.Title>Pink Hibiscus Flower</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1581825357620-908500d7b245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
        <Card.Body>
          <Card.Title>Pink Yellow Orchids</Card.Title>
          <Card.Text>
          Water your Orchids every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1622003443079-d7c075d9f158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" />
        <Card.Body>
          <Card.Title>Dracaena</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1560898126-e68036717f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Card.Body>
          <Card.Title>Tiger Lily</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1562079176-59ab4bdb7d62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
        <Card.Body>
          <Card.Title>Blue Lotus</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
        <Card.Body>
          <Card.Title>Monstera</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.etsystatic.com/23885345/r/il/79702c/3407793142/il_570xN.3407793142_k01b.jpg" />
        <Card.Body>
          <Card.Title>Alocasia Elephant Ear</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
      <Accordion.Header>Succulent Plants</Accordion.Header>
      <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1567748157439-651aca2ff064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Card.Body>
          <Card.Title>Bali Pink Anthurium</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1568576599114-b9aa87edd0e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Card.Body>
          <Card.Title>Pink Ginger Flower</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1548285852-c2c61bf144f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
        <Card.Body>
          <Card.Title>Pink Hibiscus Flower</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1581825357620-908500d7b245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
        <Card.Body>
          <Card.Title>Pink Yellow Orchids</Card.Title>
          <Card.Text>
          Water your Orchids every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1622003443079-d7c075d9f158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" />
        <Card.Body>
          <Card.Title>Dracaena</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1560898126-e68036717f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Card.Body>
          <Card.Title>Tiger Lily</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1562079176-59ab4bdb7d62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
        <Card.Body>
          <Card.Title>Blue Lotus</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
        <Card.Body>
          <Card.Title>Monstera</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.etsystatic.com/23885345/r/il/79702c/3407793142/il_570xN.3407793142_k01b.jpg" />
        <Card.Body>
          <Card.Title>Alocasia Elephant Ear</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
      <Accordion.Header>Carnivorous Plants</Accordion.Header>
      <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1567748157439-651aca2ff064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Card.Body>
          <Card.Title>Bali Pink Anthurium</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1568576599114-b9aa87edd0e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Card.Body>
          <Card.Title>Pink Ginger Flower</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1548285852-c2c61bf144f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
        <Card.Body>
          <Card.Title>Pink Hibiscus Flower</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1581825357620-908500d7b245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
        <Card.Body>
          <Card.Title>Pink Yellow Orchids</Card.Title>
          <Card.Text>
          Water your Orchids every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1622003443079-d7c075d9f158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" />
        <Card.Body>
          <Card.Title>Dracaena</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1560898126-e68036717f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Card.Body>
          <Card.Title>Tiger Lily</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1562079176-59ab4bdb7d62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
        <Card.Body>
          <Card.Title>Blue Lotus</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
        <Card.Body>
          <Card.Title>Monstera</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.etsystatic.com/23885345/r/il/79702c/3407793142/il_570xN.3407793142_k01b.jpg" />
        <Card.Body>
          <Card.Title>Alocasia Elephant Ear</Card.Title>
          <Card.Text>
          Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.
          <br/>
          <br/>
          <h4>Water/Humidity</h4><ImDroplet stack='4x'/><p3>Water daily or when soil is dry</p3>
          <h4>Light</h4><ImSun stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Plant Food/Fertilizer</h4><ImLeaf stack='4x'/><p3>Fertilize every two weeks with seaweed extract</p3>
          <h4>Temperature</h4><ImMeter2 stack='4x'/><p3>Between 60-90°F (15°-32°C)</p3>{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default PlantAccordion;