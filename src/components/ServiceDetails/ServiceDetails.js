import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceDetails } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `./home.json/${serviceDetails}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    console.log(service);
    return (
        <div className="my-5">
            <CardGroup>
                <Card className="">
                    <div className="text-center">
                        <Card.Img variant="top" className="w-50" src={service.picture} />
                    </div>
                    <Card.Body className="text-center">
                        <Card.Title>{service.serviceName}</Card.Title>
                        <Card.Text>
                            {service.serviceDetails}
                        </Card.Text>
                    </Card.Body>


                </Card>
            </CardGroup>
        </div>
    );
};

export default ServiceDetails;