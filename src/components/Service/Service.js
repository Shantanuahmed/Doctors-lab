import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import './Service.css'
const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./home.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className="text-center">Our Services</h1>
            <div className="service">
                {
                    services.map(service => <Services service={service} key={service.id}></Services>)
                }
            </div>
        </div>
    );
};

export default Service;