import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'
const Services = (props) => {
    console.log(props.service)
    const { serviceName, serviceDetails, picture, appointment, id } = props.service;
    return (
        <div className="my-5">
            <CardGroup>
                <Card className="">
                    <div className="text-center">
                        <Card.Img variant="top" className="w-50" src={picture} />
                    </div>
                    <Card.Body className="text-center">
                        <Card.Title>{serviceName}</Card.Title>
                        <Card.Text>
                            {serviceDetails}
                        </Card.Text>
                    </Card.Body>
                    <Link className="text-center link " to={`/service/${id}`}>Click for details</Link>

                </Card>
            </CardGroup>
        </div>
    );
};

export default Services;