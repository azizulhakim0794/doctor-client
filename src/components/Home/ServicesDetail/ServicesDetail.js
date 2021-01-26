import React from 'react';
import './ServicesDetail.css'

const ServicesDetail = ({ service }) => {
    return (
    <div className="col-md-4 text-center mt-5">
            <div className="card border-0 " >
                <img src={service.img} className="card-img-top services-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
    </div>
    );
};

export default ServicesDetail;