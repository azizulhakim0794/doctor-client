import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faPhone, faMapMarkerAlt , faClock } from '@fortawesome/free-solid-svg-icons'
const infosData =[
    {
        title: 'Opening Hours',
        description: 'We are Open our Hospital at 24/7',
        icon: faClock,
        background: 'primary',
        key:111
    },
    {
        title: 'Visit Our location ',
        description: 'Brooklyn NY , 10003 USA',
        icon: faMapMarkerAlt,
        background: 'dark',
        key:112
    },
    {
        title: 'Call us now',
        description: '+16123478242',
        icon: faPhone,
        background: 'primary',
        key:113
    },
]
const BusinessInfo = () => {
    return (
      
            
               <section className ="container">
               <div className=" row d-flex justify-content-center">
               {
                    infosData.map((info) =><InfoCard info={info} key={info.key}></InfoCard>)
                }
               </div>
               </section>
    );
};

export default BusinessInfo;