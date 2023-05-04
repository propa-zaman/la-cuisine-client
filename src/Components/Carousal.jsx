import React from 'react';
import carousal_1 from '../assets/carousal_1.jpeg';
import carousal_2 from '../assets/carousal_2.jpeg';
import carousal_3 from '../assets/carousal_3.webp';
import carousal_4 from '../assets/carousal_4.jpeg';
import carousal_5 from '../assets/carousal_5.jpeg';
import carousal_6 from '../assets/carousal_6.jpeg';

const Carousal = () => {
    return (
        <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
                <img src={carousal_1} alt="Pizza" style={{width: '500px', height: '300px'}}/>
            </div>
            <div className="carousel-item">
                <img src={carousal_2} alt="Pizza" style={{width: '500px', height: '300px'}} />
            </div>
            <div className="carousel-item">
                <img src={carousal_3} alt="Pizza" style={{width: '500px', height: '300px'}}/>
            </div>
            <div className="carousel-item">
                <img src={carousal_4} alt="Pizza" style={{width: '500px', height: '300px'}} />
            </div>
            <div className="carousel-item">
                <img src={carousal_5} alt="Pizza" style={{width: '500px', height: '300px'}}/>
            </div>
            <div className="carousel-item">
                <img src={carousal_6} alt="Pizza" style={{width: '500px', height: '300px'}}/>
            </div>
        </div>
    );
};

export default Carousal;