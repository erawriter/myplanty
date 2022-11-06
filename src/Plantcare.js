import React from 'react';
import PlantAccordion from './PlantCareAcc';
import PlantCareGrid from './PlantCareGridComp';

function Plantcare() {
    return (
        <div>
            <h2>Explore Plants By Catagory</h2>
            <div className='col-12'>
                    <p>Interested in caring for a plant but don’t know which would be
                    <br/> the best fit for you? Different plants require different environments
                    <br/>and varying levels of care. Our Plant Profiles help take
                    <br/>the guesswork out of your plant maintenance and keep your
                    <br/>collection happy and healthy.</p>
            </div>
            <PlantCareGrid />
            <br />
            <h2>The Ultimate Plant Profiles and Care Tips</h2>
            <PlantAccordion />
            <br />
        </div>
    );
}

export default Plantcare;