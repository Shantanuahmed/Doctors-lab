import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceDetails } = useParams();
    const [service, setService] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    useEffect(() => {
        const serviceFound = service.find((service) => service.id == serviceDetails);
        setSingleService(serviceFound);
    }, [service, serviceDetails]);

    return (
        <div className="my-5">
            <CardGroup>
                <Card className="">
                    <div className="text-center">
                        <Card.Img variant="top" className="w-50" src={singleService?.picture} />
                    </div>
                    <Card.Body className="text-center">
                        <Card.Title>{service.serviceName}</Card.Title>
                        <Card.Text>
                            {service.serviceDetails}
                        </Card.Text>
                    </Card.Body>
                    <div className="bg-secondary p-5 text-white text-center">
                        <h1>Created dynamic link successfully but could't load dynamic data.
                            please give me a solution with assignment result. probably i failed to load data from json file.
                        </h1>
                    </div>

                </Card>
            </CardGroup>
        </div>
    );
};

export default ServiceDetails;