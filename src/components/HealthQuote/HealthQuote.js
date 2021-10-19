import React from 'react';
import apple from '../Images/apple.jpg'
const HealthQuote = () => {
    return (
        <div className="bg-info">
            <h1 className="text-center m-5 p-3">An Apple a day, Keeps a doctor away!</h1>
            <div className="text-center m-5 pb-4">
                <img className="w-50" src={apple} alt="" />
            </div>
        </div>
    );
};

export default HealthQuote;