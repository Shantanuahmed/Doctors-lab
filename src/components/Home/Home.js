import React from 'react';
import banner from '../Images/banner.jfif'
import './Home.css'
const Home = () => {

    return (
        <div className="row ">
            <div className="col-lg-6 col-12">
                <img className="w-100" src={banner} alt="" />
            </div>
            <div className="col-lg-6 col-12">
                <h1 className="bg-secondary text-info text-center p-3">Our Specialities</h1>
                <ul className="bg-info specialitis">
                    <li>Laboratory Medicine Division.</li>
                    <li>Anatomic Pathology Division.</li>
                    <li>Personalized Genomic Medicine.</li>
                    <li>Precision Genomic Laboratory.</li>
                    <li>Client and Patient Support.</li>
                    <li>We have more than 100+ Doctors.</li>
                    <li>We serve you 24/7.</li>
                    <li>We have specialist for every Department.</li>
                    <li>We have most numbers of ICU.</li>
                    <li>We have Emergency Department for any Support.</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;