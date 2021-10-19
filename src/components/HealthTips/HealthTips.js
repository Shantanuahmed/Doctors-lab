import React from 'react';

const HealthTips = () => {
    return (
        <div className="bg-info">
            <h1 className="text-center">Health Tips By Doctors lab</h1>
            <ul className="my-5 p-5 text-white row ">
                <div className="col-lg-6 col-12">
                    <li>Eat a healthy diet</li>
                    <li>Consume less salt and sugar</li>
                    <li> Reduce intake of harmful fats</li>
                    <li>Avoid harmful use of alcohol</li>
                    <li> Be active</li>
                    <li>Check your blood pressure regularly</li>
                    <li> Get tested</li>
                    <li> Get vaccinated</li>
                    <li>Cover your mouth when coughing or sneezing</li>
                </div>
                <div className="col-lg-6 col-12">
                    <li>Prevent mosquito bites</li>
                    <li>Follow traffic laws</li>
                    <li>Drink only safe water</li>
                    <li>Breastfeed babies from 0 to 2 years and beyond</li>
                    <li>Talk to someone you trust if you're feeling down</li>
                    <li>Take antibiotics only as prescribed</li>
                    <li>Clean your hands properly</li>
                    <li>Prepare your food correctly</li>
                    <li> Have regular check-ups</li>
                </div>
            </ul>
        </div>
    );
};

export default HealthTips;