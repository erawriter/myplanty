import React from 'react';
import { Card, CardBody, CardHeader,} from 'reactstrap';
import Iframe from 'react-iframe';

<h1>Local Shops</h1>


function LocalShopsComponent() {
    return (
        <div>
            <Card className="localshopsmap">
                <CardHeader className="align-self-center mt-2">
                    <h5 className="mb-0">Map of Local Shops</h5>
                </CardHeader>

                   <CardBody className="card-body-cascade text-center">
                           
                        <div id="map-container-google-9" className="z-depth-1-half map-container-5" style={{height: 33 + "rem" }}>
                            <Iframe 
                                url ="https://www.google.com/maps/d/embed?mid=1NJZfwC2LP7KC90dWXwhYxGynWB9-ZuFS&ehbc=2E312F"
                                border= "none"
                                width= "100%"
                                height= "100%"
                                allowFullScreen 
                            />
                                
                         </div>
                    </CardBody>
            </Card>

        </div>
);
}

export default LocalShopsComponent;