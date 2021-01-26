import React from 'react';
import './Exceptional.css'
import ExceptionalPhoto from '../../../../image/exceptional.png'

const Exceptional = () => {
    return (
        <div className="container top-margin">
            <div className="row">
                <div className="col-md-6">
                    <img  className=" except-img" src={ExceptionalPhoto} alt=""/>
                </div>
                <div className="col-md-6 ">
                <h1>Exceptional dental <br/> care, on your terms</h1><br/>
                <p className="text-secondary except-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, autem? Ipsum ipsam eveniet repellat soluta placeat veniam quaerat! Ratione itaque natus delectus voluptate eius ducimus sit, perspiciatis commodi. Molestias, perspiciatis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, autem? Ipsum ipsam eveniet repellat soluta placeat veniam quaerat! Ratione itaque natus delectus voluptate eius ducimus sit, perspiciatis commodi. Molestias, perspiciatis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <br/>
                <button className="btn btn-mix">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;