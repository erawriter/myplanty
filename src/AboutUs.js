import React from 'react'
import { Card, Row } from 'reactstrap'

function AboutUs() {
  return (
    <div>
        <Row>
            <div class="img-titles">
            <div class="img-title"><h1>About Us</h1></div>
                <img
                        className="w-100"
                        src={require('./images/Images-8.png')}
                        alt="Plants"
                />
            </div>
        </Row>
    </div>
  )
}

export default AboutUs