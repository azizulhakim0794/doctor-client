import React from 'react';
import './Services.css'
import cavity from '../../../image/toothCavity.png'
import Fluoride from '../../../image/tooth fluo.png'
import Whitening from '../../../image/tooth.png'
import ServicesDetail from '../ServicesDetail/ServicesDetail';
const serviceData =[
    {
        name: 'Fluoride Treatment',
        img: Fluoride,
        key: 222
    },
    {
        name: 'Cavity Filling',
        img: cavity,
        key: 223
    },
    {
        name: 'Teeth Whitening',
        img: Whitening,
        key: 224
    },
]
const Services = () => {
    return (
        <section className=" services-container top-margin">
            <div className="text-center ">
            <h5 style={{color:'#1cc7c1'}}>OUS SERVICES</h5>
            <h2 className='border-btm'>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
               <div className="container row mt-2">
               {
                    serviceData.map((service) =><ServicesDetail service={service} key={service.key}></ServicesDetail>)
                }
               </div>
            </div> 
        </section>
    );
};

export default Services;