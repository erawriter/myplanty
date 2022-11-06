import React from 'react';
import LocalShopsComponent from './LocalShopsComponent';
import PlantMap from './PlantMap';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

function Localshops() {
    return (
        <div>
            <Container>
            <Row className="justify-content-md-center">
                <Col xs={9} md={6}>
                            <h1>Visit Your Local Green Spots!</h1>
                            <p>Looking for unique, local plant shops and nurseries to grow your plant family? Denver is home to many plant havens where you can browse extensive collections, take classes and learn more about plant care, and connect with the community through events. </p>
                    </Col>
                </Row>
            </Container>    
            <PlantMap />
            <LocalShopsComponent />
        </div>
    );
}

export default Localshops;